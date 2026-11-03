<?php

require 'Student.php';

class StudentManager
{
    private $students = [];

    public function add_student(string $name, int $grade)
    {
        if ($grade > 100 || $grade < 0) {
            $grade = -1;
        }

        $this->students[$name] = new Student($name, $grade);

    }

    public function update_grade($name, $grade)
    {
        if (isset($this->students[$name])) {
            $this->students[$name]->setGrade($grade);
        } else {
            echo " *** Student not found *** " . "\n";

        }

    }

    public function remove_student($name)
    {
        if (isset($this->students[$name])) {
            unset($this->students[$name]);
        } else {
            echo " *** Student not found *** " . "\n";
        }
    }

    public function display_students()
    {
        if (empty($this->students)) {
            echo "No students found.";

        } else {
            echo "===============================\n";
            echo "Students in the system:\n";

            foreach ($this->students as $student) {
                echo "Student: " . $student->getName() . ": " . $student->getGrade() . "\n";
            }
            echo "===============================\n";
        }
    }
}


?>