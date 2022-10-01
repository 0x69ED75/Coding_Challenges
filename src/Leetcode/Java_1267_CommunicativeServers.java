package Leetcode;
/*
given a map of a server center, represented as a m * n integer matrix grid,
where 1 means that on that cell there is a server and 0 means that it is no server.
Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.
 */

import java.util.HashMap;
public class Java_1267_CommunicativeServers {

    public static int countServers(int[][] grid) {
        int count = 0;
        HashMap<Integer,Integer> columns = new HashMap<Integer,Integer>();
        HashMap<Integer,Integer> rows = new HashMap<Integer,Integer>();
        for(int i = 0; i < grid.length; i++){
            for(int j = 0; j < grid[i].length; j++){
                if(grid[i][j] == 1){
                    columns.put(j,columns.getOrDefault(j,0)+1);
                    rows.put(i,rows.getOrDefault(i,0)+1);
                }
            }
        }

        for(int i = 0; i < grid.length; i++){
            for (int j = 0; j < grid[i].length; j++){
                if(grid[i][j] == 1) {
                    if (columns.get(j) > 1) {
                        count++;
                    } else if (rows.get(i) > 1) {
                        count++;
                    }
                }
            }
        }

        System.out.println(columns);
        System.out.println(rows);
        return count;
    }


    public static void main(String[] args) {
        System.out.println(countServers(new int[][]{{1,1,0,0},{0,0,1,0},{0,0,1,0},{0,0,0,1}}));
    }



}
