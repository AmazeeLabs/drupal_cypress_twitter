<?php

use Drupal\user\Entity\User;

User::create([
  'name' => 'pmelab',
  'twitter' => '@pmelab',
  'status' => 1,
])->save();
