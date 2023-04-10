using System;

class Program {
  static void Main(string[] args) {
    int M = 6;
    int N = 46;
    int sum = GetSum(M, N); // Объявляем переменную для хранения суммы чисел

    Console.WriteLine(sum); // Выводим сумму на экран  (1066)
  }

  static int GetSum(int start, int end)
  {
      if(start == end)
      {
          return start;
      }
      else if(start > end)
      {
          return 0;
      }
      else
      {
          return start + GetSum(start+1, end);
      }
  }
}
