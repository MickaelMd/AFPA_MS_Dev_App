<?php 

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('objet', null, [
                'label' => 'Objet ',
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir un objet.']),
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email ',
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir votre adresse email.']),
                    new Email(['message' => 'Veuillez saisir une adresse email valide.']),
                ],
            ])
            ->add('message', TextareaType::class, [
                'label' => ' Message ',
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir un message.']),
                ],
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Envoyer le message',
                'attr' => ['class' => 'btn btn-primary'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}