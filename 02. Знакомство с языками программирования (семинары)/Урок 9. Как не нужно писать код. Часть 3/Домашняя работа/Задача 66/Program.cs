using System;

class Program {
  static void Main(string[] args) {
    int M = 6;
    int N = 46;
    int sum = 0; // Объявляем переменную для хранения суммы чисел

    for(int i=M; i<=N; i++) {
      sum += i; // Добавляем текущее число к сумме
    }

    Console.WriteLine(sum); // Выводим сумму на экран  (1066)
  }
}