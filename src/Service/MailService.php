<?php

namespace App\Service;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;

class MailService
{
    private MailerInterface $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendContactEmail(string $from, string $to, string $replyTo, string $subject, string $template, array $context): bool
    {
        $email = (new TemplatedEmail())
            ->from($from)
            ->to($to)
            ->replyTo($replyTo)
            ->subject($subject)
            ->htmlTemplate($template)
            ->context($context);

        try {
            $this->mailer->send($email);
            return true; 
        } catch (\Exception $e) {
            return false; 
        }
    }
}