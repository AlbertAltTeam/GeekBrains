using System;

class Program {
    static void Main(string[] args) {
        // Вводим исходный массив с клавиатуры
        Console.Write("Введите элементы массива через запятую: ");
        string inputString = Console.ReadLine();
        string[] inputArray = inputString.Split(',');

        // Создаем новый массив из строк, длина которых меньше или равна 3 символам
        string[] outputArray = new string[inputArray.Length];
        int j = 0; // Индекс текущего элемента в выходном массиве
        for (int i = 0; i < inputArray.Length; i++) {
            if (!string.IsNullOrEmpty(inputArray[i]) && inputArray[i].Length <= 3) {
                outputArray[j] = inputArray[i];
                j++;
            }
        }

        // Если новый массив пустой - выводим сообщение об этом
        if (j == 0) {
            Console.WriteLine("Нет строк длиной меньше или равной 3 символам.");
            return; // Выходим из метода Main, так как больше делать нечего
        }

        // Обрезаем выходной массив до размера j (т.е. количества отфильтрованных строк)
        Array.Resize(ref outputArray, j);

        // Выводим результат на консоль
        Console.WriteLine("Отфильтрованный массив: {0}", string.Join(", ", outputArray));
    }
}
