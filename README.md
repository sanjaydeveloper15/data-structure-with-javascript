# **🧮 JavaScript Data Structures and Algorithms**

<p align="center">
  <img src="https://i.postimg.cc/rmd6DfZD/dsa.jpg" alt="DSA - Education Funda"/>
</p>

In this repository we cover some of the most commonly asked JavaScript data structure questions related to arrays, strings and objects which commonly asked in interviews at tier 1 companies.

- Sorting Algorithms (Bubble Sort)
- Search Algorithms (Linear Search, Binary Search)

### Questions Covered Like Below

1. Custom sorting program in JS via Bubble Sort ?
2. Write a program to check if a string or word or number is palindrome ?
3. Write a program to check if value/target exists or not in ascending array in O(log n) time complexity ?
4. Write a program to get total vowel count from String ?
5. Write a program to prints factorial of any number ?
6. Write a program for check number is prime or not ?
7. Write a program to check whether number is perfect number or not ?
8. Write a program to find duplicate numbers in an integer array ?
9. How do you remove duplicates from an integer array ?
10. We have group of people in the form of array and you have to group people basis upon age ?
11. Count unique values in a sorted array without `Array` methods or `Set()` in **O(n)**.

Refer to the [blog post](https://www.linkedin.com/pulse/javascript-most-commonly-asked-data-structure-questions-sanjay-kumar/).


## **🧠 Problem-Solving Patterns**

### Fequency Counter

Many times you need to compare between 2 arrays in that situation simplest solution is use Nested loops or Linear Searching, which eventually has an Big O n(Square) O(n^2) Time Complexity, For solving this problem we can use Frequency Counter, In which we found first Frequency of both arrays then simple run loop of any 1 Frequency object/array and compare it directly.

### Multiple Pointers

Many times in **Sorted Array** we need to compare and we generally do nested loop so for solving this we can use this Multiple Pointer magic, in which we generally use **Binary Search Algorithm**. We 1st have to analyse our pointer it could be 1st or Last indexs or 1st or 2nd _Indexes_.

### Sliding Window Pattern

When we have **String** or **Array** which creating a WINDOW from one position to another position depending upon certain condition and a new window is created. It is very useful for keeping track of a subset of data in an array/string etc.

### Divide and Conquer Pattern

It is related to our search and sorting algorithms, such as in Binery Search we divide the array from mid then search the element.

### Recursion

Keeps calling same function until didn't get expected result. Here few Points are so important otherwise our Call Stack will be infinite and size exceeding error comes:

- Identify base case such as if (statement) return x;
- It basically depends upon call stack, you can check call stack example in Examples directory.

### Bubble Sort

Runs two loops for sorting the Integer arrays and swap the numbers basis upon comparisions. This "works well with small items of array only" as we know that Wrost and Average case time complexity for it is O(nSquare), only best case goes to O(n) time complexity.

### Merge Sort

It's an combination of two things - merging and sorting. Merge sort works really well with big size of Integer arrays as well and give response so faster as compare to Bubble/Insertion/Selection sort algorithms. It improves time complexity from O(nSquare) to O(n-log-n) stable in each scenario.

### Quick Sort

Quick sort works by selecting a pivot element and partitioning the array into elements less than the pivot and elements greater than the pivot. This process is then recursively applied to the sub-arrays.

- Pivot: Select an element as the pivot.
- Partition: Reorder the array so that elements less than the pivot are on the left, and elements greater than the pivot are on the right.
- Apply quick sort recursively to the left and right sub-arrays.

#### Time & Space Complexity

- Best & Averate Case - O(n log n)
- Wrost Case - O(nSquare)
- Space - O(log n) for the recursion stack in the average case and in wrost case O(n).

### Radix Sort

Radix sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits. It’s particularly efficient for sorting integers or strings where you want to sort based on digit or character positions rather than direct comparisons.

- Determine the Maximum Number of Digits
- Sort Digits by Place Value
- Repeat for Each Digit Place

## **📈 Time & Space Complexity Overview**

| Algorithm      | Best Case   | Average Case | Worst Case  | Space Complexity |
|----------------|-------------|--------------|-------------|------------------|
| **Bubble Sort**| O(n)        | O(n²)        | O(n²)       | O(1)             |
| **Merge Sort** | O(n log n)  | O(n log n)   | O(n log n)  | O(n)             |
| **Quick Sort** | O(n log n)  | O(n log n)   | O(n²)       | O(log n)         |
| **Radix Sort** | O(nk)       | O(nk)        | O(nk)       | O(n+k)           |

---

## **📄 Usage Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sanjaydeveloper15/js-data-structure-questions.git
   cd js-data-structure-questions
   ```

2. **Run Code Examples**
   Open any file in your preferred IDE or run examples directly using Node.js.

3. **Explore Patterns and Solutions**
   Dive into problem-solving patterns and example implementations to sharpen your skills.

## ❤️ Found this project useful?

If you found this project useful, then please consider giving it a ⭐️ on Github and sharing it with your friends via social media.

Feel free to reach out to me through @sanjaykumarwebs if you have any questions or feedback!

## **📚 Recommended Resources**

- **[Visual Studio Code](https://code.visualstudio.com/download)**: IDE for JavaScript development.
- **[Education Funda](https://www.youtube.com/@EducationFundaIndia)**: Tutorials on data structures and algorithms.
- **[Sanjay Kumar](https://sanjaydeveloper.netlify.app/)**: Explore my portfolio for more projects.
