/*
 *  Copyright 2011 Alexey Andreev.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.teavm.common;

import java.util.Arrays;


/**
 *
 * @author Alexey Andreev
 */
public final class GraphUtils {
    static final byte NONE = 0;
    static final byte VISITING = 1;
    static final byte VISITED = 2;

    private GraphUtils() {
    }

    public static Graph invert(Graph graph) {
        int sz = graph.size();
        GraphBuilder result = new GraphBuilder();
        int[] sourceEdges = new int[sz];
        for (int node = 0; node < sz; ++node) {
            int sourceCount = graph.copyIncomingEdges(node, sourceEdges);
            for (int i = 0; i < sourceCount; ++i) {
                int source = sourceEdges[i];
                result.addEdge(node, source);
            }
        }
        return result.build();
    }

    public static Graph close(Graph graph) {
        GraphBuilder result = new GraphBuilder();
        for (int node = 0; node < graph.size(); ++node) {
            int[] next = graph.outgoingEdges(node);
            for (int target : next) {
                result.addEdge(node, target);
            }
            if (next.length == 0) {
                result.addEdge(node, graph.size());
            }
        }
        return result.build();
    }

    public static Graph removeLoops(Graph graph) {
        int sz = graph.size();
        GraphBuilder result = new GraphBuilder();
        int[] stack = new int[sz * 2];
        int stackSize = 0;
        byte[] state = new byte[sz];
        for (int i = 0; i < sz; ++i) {
            if (graph.incomingEdgesCount(i) == 0) {
                stack[stackSize++] = i;
            }
        }
        while (stackSize > 0) {
            int node = stack[--stackSize];
            switch (state[node]) {
                case NONE:
                    state[node] = VISITING;
                    stack[stackSize++] = node;
                    for (int next : graph.outgoingEdges(node)) {
                        switch (state[next]) {
                            case NONE:
                                result.addEdge(node, next);
                                stack[stackSize++] = next;
                                break;
                            case VISITED:
                                result.addEdge(node, next);
                                break;
                        }
                    }
                    break;
                case VISITING:
                    state[node] = VISITED;
                    break;
            }
        }
        return result.build();
    }

    public static int edgeCount(Graph graph) {
        int cnt = 0;
        int sz = graph.size();
        for (int node = 0; node < sz; ++node) {
            cnt += graph.outgoingEdgesCount(node);
        }
        return cnt;
    }

    public static DominatorTree buildDominatorTree(Graph graph) {
        DominatorTreeBuilder builder = new DominatorTreeBuilder(graph);
        builder.build();
        return new DefaultDominatorTree(builder.dominators, builder.vertices);
    }

    public static Graph buildDominatorGraph(DominatorTree domTree, int sz) {
        GraphBuilder graph = new GraphBuilder(sz);
        for (int i = 0; i < sz; ++i) {
            int idom = domTree.immediateDominatorOf(i);
            if (idom >= 0) {
                graph.addEdge(idom, i);
            }
        }
        return graph.build();
    }

    public static int[][] findDominanceFrontiers(Graph cfg, DominatorTree domTree) {
        IntegerArray[] tmpFrontiers = new IntegerArray[cfg.size()];
        int[][] domFrontiers = new int[cfg.size()][];

        // For each node calculate the number of descendants in dominator tree
        int[] descCount = new int[cfg.size()];
        for (int i = 0; i < cfg.size(); ++i) {
            int idom = domTree.immediateDominatorOf(i);
            if (idom >= 0) {
                descCount[idom]++;
            }
        }

        // Push final nodes onto stack
        int[] stack = new int[cfg.size() * 2];
        int head = 0;
        for (int i = 0; i < cfg.size(); ++i) {
            if (descCount[i] == 0) {
                stack[head++] = i;
            }
        }

        // Process dominator tree in bottom-up order
        while (head > 0) {
            int node = stack[--head];
            IntegerArray frontier = tmpFrontiers[node];
            if (frontier == null) {
                frontier = new IntegerArray(1);
            }
            int idom = domTree.immediateDominatorOf(node);
            for (int successor : cfg.outgoingEdges(node)) {
                // If successor's immediate dominator is not the node,
                // then add successor to node's dominance frontiers
                if (domTree.immediateDominatorOf(successor) != node) {
                    frontier.add(successor);
                }
            }

            tmpFrontiers[node] = null;
            int[] frontierSet = makeSet(frontier);
            domFrontiers[node] = frontierSet;

            if (idom >= 0) {
                // Propagate current set to immediate dominator
                for (int element : frontierSet) {
                    if (domTree.immediateDominatorOf(element) != idom) {
                        IntegerArray idomFrontier = tmpFrontiers[idom];
                        if (idomFrontier == null) {
                            idomFrontier = new IntegerArray(1);
                            tmpFrontiers[idom] = idomFrontier;
                        }
                        idomFrontier.add(element);
                    }
                }

                // Schedule processing the immediate dominator if all of its ancestors
                // in dominator tree have been processed
                if (--descCount[idom] == 0) {
                    stack[head++] = idom;
                }
            }
        }

        return domFrontiers;
    }


    private static int[] makeSet(IntegerArray array) {
        int[] items = array.getAll();
        int[] set = new int[items.length];
        int sz = 0;
        int last = -1;
        for (int i = 0; i < items.length; ++i) {
            int item = items[i];
            if (item != last) {
                set[sz++] = item;
                last = item;
            }
        }
        if (sz != set.length) {
            set = Arrays.copyOf(set, sz);
        }
        return set;
    }
}
