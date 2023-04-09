using System;

class Program {
  // функция Аккермана
  static int Ackermann(int m, int n) {
    // базовый случай: A(0, n) = n + 1
    if(m == 0) {
      return n + 1;
    } 
    // еще один базовый случай: A(m, 0) = A(m - 1, 1)
    else if(n == 0) {
      return Ackermann(m - 1, 1);
    } 
    // рекурсивное вычисление значений функции Аккермана
    else {
      return Ackermann(m - 1, Ackermann(m, n - 1));
    }
  }

  static void Main(string[] args) {
    int m = 2; // первый аргумент функции Аккермана
    int n = 3; // второй аргумент

    Console.WriteLine("A({0},{1}) = {2}", m, n, Ackermann(m, n)); // вывод результата на экран A(2,3) = 9
  }
}