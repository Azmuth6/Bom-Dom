<?php

require 'StudentManager.php';

$student_manager = new StudentManager();

echo "Welcome To Student Manager!" . "\n";
while (true) {

    echo "1. Add Student" . "\n";
    echo "2. Remove Student" . "\n";
    echo "3. Update Student Grade" . "\n";
    echo "4. Display Students" . "\n";
    echo "5. Exit" . "\n";
    echo "Choose an option:" . "\n";

    $choice = trim(fgets(STDIN));

    switch ($choice) {
        case "1":
            echo "Enter student name to add: ";
            $name = fgets(STDIN);
            echo "Enter student grade to add: ";
            $grade = fgets(STDIN);
            $student_manager->add_student($name, $grade);
            break;

        case "2":
            echo "Enter student name to delete: ";
            $name = fgets(STDIN);
            $student_manager->remove_student($name);
            break;

        case "3":
            echo "Enter student name to update: ";
            $name = fgets(STDIN);
            echo "Enter student grade to update: ";
            $grade = fgets(STDIN);
            $student_manager->update_grade($name, $grade);
            break;

        case "4":
            $student_manager->display_students();
            break;

        case "5":
            echo "Exiting Student Manager. Goodbye!" . "\n";
            return;

    }
}



?>