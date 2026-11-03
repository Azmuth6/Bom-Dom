<?php

/*
    echo "Hello World " , ", Hello ali \n";

    $Name = 123;
    $Name = 123.14 ;
    $Name = "AS";

    echo $Name;

    echo "\n";

    $Student = ["Ali", "Ahmed", "Sara"];

    echo $Student [0];

    echo "\n";


    define("Site","Google");


    echo "ALI :  " . "He ali" . "\n";


    echo "\n-----------------------------------\n";

    $menu_option = 4; 
    $result = match($menu_option) {
        1 => "Home",
        2 => "About",
        3,5 => "Contact",
        default => "Invalid option"
    };

    echo $result;

    echo "\n-----------------------------------\n";



function sumTwoNumbers($a, $b) {
    
    if($a < 0 || $b < 0) {
        return "Error: Both numbers must be non-negative.";
    }

    
    $result = $a + $b;
    return $result;

}
    
$result = sumTwoNumbers(2,8);

echo "The sum of 2 and 8 is: " . $result . "\n";

echo "\n-----------------------------------\n";
    
echo "Enter Number : " . readline();
echo "Enter Number 2  : " . fgetc(STDIN);


echo "\n-----------------------------------\n";



$numbers = [1, 2, 3, 4, 5];

foreach ($numbers as $number) {
    echo $number . "\n";
}

print_r($numbers);
    
array_push($numbers, 6,4,8);
print_r($numbers);

$Last = array_pop($numbers);


echo "\n-----------------------------------\n";


$FirstName = ["Salah"]; 
$LastName  = ["Ahmed"];

$FullName = array_merge($FirstName, $LastName);


echo "\n-----------------------------------\n";



$NamesFroQueue = ["Ali", "Ahmed", "Sara"];

function enqueue($element)
{
    global $NamesFroQueue;
    array_push($NamesFroQueue, $element);
}
function dequeue()
{
    global $NamesFroQueue;
    return array_shift($NamesFroQueue);
}

print_r($NamesFroQueue);

enqueue("Omar");
enqueue("Salah");

print_r($NamesFroQueue);

dequeue();

print_r($NamesFroQueue);


echo "\n-----------------------------------\n";


$person = [];

$person["name"] = "Salah";
$person["grade"] = 78;

$keys = array_keys($person);
$Values = array_values($person);

foreach ($keys as $key) {
    echo $key . ":" . $person[$key] . "\n";
    
    }
    
    
*/


// Abstraction
interface Shape {
public function rotate(int $degree): int;
public function playSound();

}


// Implementation

class Square implements Shape {
public function rotate(int $degree): int {
echo "123";
return 123;

}

public function playSound() {
echo "Playing sound. .";

}
}

class Amoeba implements Shape {
public function rotate(int $degree): int {
return 123;
}

public function playSound() {
    echo "";

}
}



    
?>