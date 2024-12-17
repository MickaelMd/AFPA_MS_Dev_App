<?php

// namespace App\Controller;

// use App\Form\ContactFormType;
// use App\Entity\Contact;
// use Doctrine\ORM\EntityManagerInterface;
// use Symfony\Component\HttpFoundation\Request;
// use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\Response;
// use Symfony\Component\Routing\Annotation\Route;
// use Symfony\Component\Mailer\MailerInterface;
// use Symfony\Bridge\Twig\Mime\TemplatedEmail;
// use App\Service\MailService;

// class ContactController extends AbstractController
// {
//     #[Route('/contact', name: 'app_contact')]
//     public function index(Request $request, EntityManagerInterface $entityManager, MailerInterface $mailer): Response
//     {
//         $contact = new Contact();

//         $form = $this->createForm(ContactFormType::class, $contact);
//         $form->handleRequest($request);

//         if ($form->isSubmitted() && $form->isValid()) {
           
//             $entityManager->persist($contact);
//             $entityManager->flush();

           
//             $email = (new TemplatedEmail())
//                 ->from('no-reply@votresite.com') 
//                 ->to('destinataire@example.com') 
//                 ->replyTo($contact->getEmail()) 
//                 ->subject($contact->getObjet()) 
//                 ->htmlTemplate('emails/contact_email.html.twig') 
//                 ->context([
//                     'user_email' => $contact->getEmail(),
//                     'objet' => $contact->getObjet(),
//                     'message' => $contact->getMessage(),
//                 ]);

            
//             try {
//                 $mailer->send($email);
//                 $this->addFlash('success', 'Votre message a été envoyé avec succès.');
//             } catch (\Exception $e) {
//                 $this->addFlash('error', 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
//             }

            
//             return $this->redirectToRoute('app_contact');
//         }

//         return $this->render('contact/index.html.twig', [
//             'form' => $form->createView(),
//         ]);
//     }
// }


// php bin/console messenger:consume async




namespace App\Controller;

use App\Form\ContactFormType;
use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\MailService;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, EntityManagerInterface $entityManager, MailService $mailService): Response
    {
        $contact = new Contact();

        $form = $this->createForm(ContactFormType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($contact);
            $entityManager->flush();

            $isSent = $mailService->sendContactEmail(
                'no-reply@votresite.com',
                'destinataire@example.com',
                $contact->getEmail(),
                $contact->getObjet(),
                'emails/contact_email.html.twig',
                [
                    'user_email' => $contact->getEmail(),
                    'objet' => $contact->getObjet(),
                    'message' => $contact->getMessage(),
                ]
            );

            if ($isSent) {
                $this->addFlash('success', 'Votre message a été envoyé avec succès.');
            } else {
                $this->addFlash('error', 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
            }

            return $this->redirectToRoute('app_contact');
        }

        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}