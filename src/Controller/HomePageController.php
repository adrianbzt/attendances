<?php

namespace App\Controller;

use App\Service\Helpers;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomePageController extends Controller
{

    /**
     * @Route("/")
     */
    public function defaultAction()
    {

        $test = new Helpers($this->getParameter('admin_email'), $this->getParameter('admin_name'));

        return $this->render(
            'default.html.twig',
            $test->returnDefaultViewFields()
        );

    }

}