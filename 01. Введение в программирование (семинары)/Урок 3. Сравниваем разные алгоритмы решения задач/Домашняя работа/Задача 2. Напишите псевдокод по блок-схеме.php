<?php
//Найти среднее арифметическое среди всех элементов массива [2, 5, 13, 7, 6, 4]

$numbers = [2, 5, 13, 7, 6, 4];
$size = 6;
$sum = 0;
$avg = 0;
$index = 0;


$numbers = [2, 5, 13, 7, 6, 4];
$size = count($numbers);
$sum = 0;
$index = 0;

while ($index < $size) {
    $sum += $numbers[$index];
    $index++;
}

$avg = $sum / $size;

echo "Среднее значение: " . $avg;