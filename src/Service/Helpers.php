<?php

namespace App\Service;


class Helpers
{

    private $adminEmail;
    private $adminName;

    public function __construct($adminEmail, $adminName)
    {
        $this->adminEmail = $adminEmail;
        $this->adminName = $adminName;
    }

    public function toUpperCase($string)
    {
        return strtoupper($string);
    }

    public function returnDefaultViewFields()
    {
        $render = array(
            'admin_name' => $this->adminName,
            'admin_email' => $this->adminEmail
        );

        return $render;
    }

}