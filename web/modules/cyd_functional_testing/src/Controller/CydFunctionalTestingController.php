<?php

namespace Drupal\cyd_functional_testing\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for cyd_functional_testing routes.
 */
class CydFunctionalTestingController extends ControllerBase {

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

}
