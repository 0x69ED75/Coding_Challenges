package Leetcode;

import java.util.*;

/*
https://leetcode.com/problems/top-k-frequent-words/description/
Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest
Sort the words with the same frequency by their lexicographical order.
 */

public class Java_692_kFrequentWords {

    public static List<String> topKFrequent(String[] words, int k) {

        List<String> x = new ArrayList<>();
        HashMap<String,Integer> frequencies = new HashMap<>();

        for(int i = 0; i < words.length; i++){ // map each word to the number of times it appears in hashmap
            frequencies.put(words[i],frequencies.getOrDefault(words[i],0)+1);
        }

        // if the words have the same frequency, prioritise those in queue with a lower lexicographical value.
        PriorityQueue<String> queue = new PriorityQueue<>((a,b) -> frequencies.get(a).equals(frequencies.get(b)) ? a.compareTo(b) : frequencies.get(b) - frequencies.get(a));
        queue.addAll(frequencies.keySet()); // adding all values to queue.

        for(int i = 0; i < k; i++){ // poll queue k times, into a list x
            x.add(queue.poll());
        }

        return x;
    }

    public static void main(String[] args) {
        System.out.println(topKFrequent(new String[]{"i","love","leetcode","i","love","coding"},2));
    }
}
