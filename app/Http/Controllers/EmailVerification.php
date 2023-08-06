<!-- tidak digunakan -->
<?php

use Illuminate\Mail\Mailable;

class EmailVerification extends Mailable
{
    protected $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function build()
    {
        return $this->view('emails.email-verification')
            ->with(['user' => $this->user]);
    }
}
