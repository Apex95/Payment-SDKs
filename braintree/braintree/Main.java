package braintree;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.PriorityQueue;
import java.util.TreeSet;

import com.braintreegateway.BraintreeGateway;
import com.braintreegateway.ClientTokenRequest;
import com.braintreegateway.Environment;

public class Main 


{
	
	
	static class Point implements Comparable<Point>
    {
        public int x;
        public int y;
        
        public Point(int x, int y)
        {
            this.x = x;
            this.y = y;
            
        }
        
        @Override
        public int compareTo(Point p)
        {
            return Math.sqrt((this.x-0)*(this.x-0) + (this.y-0) * (this.y - 0)) <= Math.sqrt((p.x-0)*(p.x-0) + (p.y-0) * (p.y - 0)) ? -1 : 1;
        }
    }
    

    public static List<List<Integer>> findClosestKPoints(List<List<Integer>> points, int k) {
    // Write your code here
        PriorityQueue<Point> pq = new PriorityQueue<Point>();
        
        for (int i = 0; i < points.size(); i++)
            //for (int j = 0; j < points.get(i).size(); j++)
            {
            	System.out.println(points.get(i).get(0) + " " + points.get(i).get(1));
                pq.offer(new Point(points.get(i).get(0), points.get(i).get(1)));
            }
        
        
        List<List<Integer>> closestPoints = new ArrayList<List<Integer>>();
        
        for (int i = 0; i < k; i++)
        {
            Point p = pq.poll();
            
            ArrayList<Integer> _p = new ArrayList<Integer>();
            _p.add(p.x);
            _p.add(p.y);
            
            closestPoints.add(_p);
        }
        
        return closestPoints;

    }
	
	
	
	public static void main(String[] args)
	{
		
		ArrayList<Integer> students = new ArrayList<Integer>();
		students.add(1);
		students.add(1);
		students.add(1);
		students.add(2);
		students.add(1);
		students.add(1);
		students.add(1);
		students.add(1);
		students.add(1);
		students.add(1);
		students.add(1);
		students.add(1);
		students.add(1);
		students.add(1);
		
		System.out.println(cheekyStudent(students));
		
		
		List<Integer> numbers = new ArrayList<Integer>();
		numbers.add(10);
		numbers.add(6);
		numbers.add(2);
		numbers.add(3);
		numbers.add(7);
		numbers.add(1);
		numbers.add(2);
		
		System.out.println(minimumOperations(numbers));
		
		/*
		List<List<Integer>> closestPoints = new ArrayList<List<Integer>>();
		
		ArrayList<Integer> _p = new ArrayList<Integer>();
		
		_p.add(-8);
		_p.add(7);
		closestPoints.add(_p);
		
		_p = new ArrayList<Integer>();
		_p.add(3);
		_p.add(7);
		closestPoints.add(_p);
		
		_p = new ArrayList<Integer>();
		_p.add(-9);
		_p.add(-6);
		closestPoints.add(_p);
		
		_p = new ArrayList<Integer>();
		_p.add(7);
		_p.add(2);
		closestPoints.add(_p);
		
		_p = new ArrayList<Integer>();
		_p.add(7);
		_p.add(-5);
		closestPoints.add(_p);
		
		//System.out.println(findClosestKPoints(closestPoints, 3));
		
		
		
		ArrayList<String> s = new ArrayList<String>();
		s.add("caa");
		s.add("aaa");
		s.add("aad");
		
		System.out.println(ancientText(s));
		*/
		
	}
	
	
	public static String ancientText(List<String> words) {
	    // Write your code here
	        String alphabet = "";
	        int wordsLen = words.size();
	        
	        StringBuilder sb = new StringBuilder();
	        
	        for (int i = 0; i < wordsLen - 1; i++)
	        {
	            String word1 = words.get(i);
	            String word2 = words.get(i+1);
	            
	            int minLen = word1.length() < word2.length() ? word1.length() : word2.length();
	            
	            for (int j = 0; j < minLen; j++)
	                if (word1.charAt(j) != word2.charAt(j))
	                {
	                	if (sb.indexOf(String.valueOf(word1.charAt(j))) < 0)
	                	{
	                		//System.out.println("Insert " + word1.charAt(j));
	                		sb.append(word1.charAt(j));
	                		//System.out.println(" => " + sb);
	                	}
	                	if (sb.indexOf(String.valueOf(word2.charAt(j))) < 0)
	                	{
	                		//System.out.println("Insert " + word2.charAt(j) + " at " + sb.indexOf(String.valueOf(word1.charAt(j))));
	                		sb.insert(sb.indexOf(String.valueOf(word1.charAt(j))) + 1, word2.charAt(j));
	                		//System.out.println(" => " + sb);
	                	}
	                	
	                	break;
	                }
	        }
	        
	        
	        
	        
	        
	        return sb.toString();

	    }
	
	
	
	public static long minimumOperations(List<Integer> numbers) {
	    // Write your code here
		ArrayList<Integer> t = new ArrayList<Integer>();
        
        //t.add(min);
        
        long numberOfOps = 0;
        
        
        for (int i = 0; i < numbers.size(); i++)
        {
        	
        	
        	int smallerNumbers = 0;
        	
            if (i == 0)
            {
                t.add(numbers.get(i));
                numberOfOps++;
                System.out.println("Added 10");
                continue;
            }
            
            int position = 0;
            
            for (Integer in : t)
            {
                    if (in < numbers.get(i))
                    {
                        //System.out.println(in + " < " + numbers.get(i));
                        smallerNumbers++;
                        position++;
                    }

            }
                    
            smallerNumbers = t.size() - smallerNumbers > smallerNumbers ? smallerNumbers : t.size() - smallerNumbers;
            numberOfOps += smallerNumbers + 1 + smallerNumbers;
            
            System.out.println("adding " + numbers.get(i) + " at " + position + " smaller than:" + smallerNumbers);
            
            t.add(position, numbers.get(i));
            System.out.println(t + " " + smallerNumbers);
        }
        
        
        return numberOfOps;
		
	    }
	
	
	
	public static int count(int i, int j, List<List<Integer>> m, int[][] visited)
    {
		
        if (i < 0 || j < 0)
            return 0;
        
        if (i >= m.size() || j >= m.get(i).size())
            return 0;
        
       
        
        if (m.get(i).get(j) == 0 || visited[i][j] == 1)
            return 0;
        
        visited[i][j] = 1;

        return 1+ count(i, j-1, m, visited) + count(i, j+1, m, visited) + count(i-1, j, m, visited) + count(i+1, j, m, visited) + count(i-1, j-1, m, visited) + count(i-1, j+1, m, visited) + count(i+1, j-1, m, visited) + count(i+1, j+1, m , visited);

    }
    

    public static int countIslands(List<List<Integer>> m) {
    // Write your code here
        int islands = 0;
        
        if (m.size() <= 0)
            return 0;
        
        int[][] visited = new int[m.size()][m.get(0).size()];
        
        
        
        for (int i = 0; i < m.size(); i++)
            for (int j = 0; j < m.get(i).size(); j++)
            {
                int counted = count(i, j, m, visited);
                
                
                if (counted > 0)
                    islands++;
                    
            }
        
        return islands;

    }
	
	
	
	
	
	
	
	
	public static int cheekyStudent(List<Integer> a) {
	    // Write your code here
	        int aLen = a.size();
	        
	        if (aLen == 1)
	            return a.get(0);
	          
	        int sum = 0;
	        for (int i = 0; i < aLen; i++)
	        {
	            sum = (sum + a.get(i)) % 13;
	        }
	        return sum % 13;
	            

	    }
	
}
