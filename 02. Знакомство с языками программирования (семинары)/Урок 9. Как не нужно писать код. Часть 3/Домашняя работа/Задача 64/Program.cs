using System;

class Program {
  static void Main(string[] args) {
    double M = 5.1;
    double N = 18.3;

    string result = "\"\""; // добавляем 2 кавычки (просто как в примере, может это лишнее :) )

    result += GetRangeString((int)M, (int)N);

    result += "\"\""; // добавляем 2 кавычки (просто как в примере, может это лишнее :) )

    Console.WriteLine(result); // выводим результат на экран (""5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18"")
  }

  static string GetRangeString(int start, int end)
  {
      if(start == end)
      {
          return start.ToString();
      }
      else if(start > end)
      {
          return "";
      }
      else
      {
          return start + ", " + GetRangeString(start+1, end);
      }
  }
}
