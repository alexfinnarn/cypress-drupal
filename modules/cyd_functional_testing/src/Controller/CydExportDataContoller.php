<?php

namespace Drupal\cyd_functional_testing\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\user\UserAuthInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Returns responses for cyd_functional_testing routes.
 */
class CydExportDataContoller extends ControllerBase {

  /**
   * The user.auth service.
   *
   * @var \Drupal\user\UserAuthInterface
   */
  protected $userAuth;

  /**
   * The controller constructor.
   *
   * @param \Drupal\user\UserAuthInterface $user_auth
   *   The user.auth service.
   */
  public function __construct(UserAuthInterface $user_auth) {
    $this->userAuth = $user_auth;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('user.auth')
    );
  }

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

  public function exportData() {
    $build = [];
    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];
    return $build;
  }

}
