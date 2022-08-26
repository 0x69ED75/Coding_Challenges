package StreamExamples;
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
// Given a string array, CodeWars_Java.filter out any non-digit characters and return this as a list.
public class Filter {
    public static void main(String[] args) {
        List<Object> list= Arrays.asList("Foo",1);
        System.out.println(filterList(list));

    }
    public static List<Object> filterList(final List<Object> list) {
        return list.stream()
                .filter(e -> e instanceof Integer)
                .collect(Collectors.toList());
    }

    }
