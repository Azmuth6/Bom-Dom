<?php

class Student
{

    private string $Name;
    private int $Garde;

    public function __construct(string $Name, int $Garde)
    {
        $this->Name = $Name;
        $this->Garde = $Garde;
    }

    public function getName(): string
    {
        return $this->Name;
    }

    public function getGrade(): int
    {
        return $this->Garde;
    }

    public function setGrade($Garde): void
    {
        $this->Garde = $Garde;
    }



}


?>