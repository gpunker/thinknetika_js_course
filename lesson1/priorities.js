// Определить порядок выполнения операторов с помощью таблицы приоритетов операций

/** 
 * Пример 1
 * 
 * var x = 6, y = 15, z = 4;
 * y /= x + 5 % z;
 * 
 * Прядок:
 * 1) %  (1)
 * 2) +  (7)
 * 3) /= (2.142857142857143)
 */

/** 
 * Пример 2
 * 
 * var x = 6, y = 15, z = 4;
 * z = x++ + y * 5;
 * 
 * Прядок:
 * 1) ++ (6)
 * 2) *  (75)
 * 3) +  (81)
 * 4) =  (81)
 */

/** 
 * Пример 3
 * 
 * var x = 6, y = 15, z = 4;
 * x += y - x++ * z;
 * 
 * Прядок:
 * 1) ++ (6)
 * 2) *  (24)
 * 3) -  (-9)
 * 4) += (-3)
 */

/** 
 * Пример 4
 * 
 * var x = 6, y = 15, z = 4;
 * z = -- x - y * 5;
 * 
 * Прядок:
 * 1) -- (5)
 * 2) *  (75)
 * 3) -  (-70)
 * 4) = (-70)
 */

/** 
 * Пример 5
 * 
 * var a = 3;
 * b = ++a + 1 + a++;
 * 
 * Прядок:
 * 1) a++ (3)
 * 2) ++a  (4)
 * 3) левый + (5)
 * 4) правый + (9)
 * 5) = (9)
 */