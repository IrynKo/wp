<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit94bd22b5e0f1f0f3ce6feebfa626e892
{
    public static $files = array (
        '0078757fbd019a5f202f2be6585c3626' => __DIR__ . '/..' . '/publishpress/wordpress-banners/BannersMain.php',
        '41c664bd04a95c2d6a2f2a3e00f06593' => __DIR__ . '/..' . '/publishpress/wordpress-reviews/ReviewsController.php',
    );

    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Container\\' => 14,
            'PPVersionNotices\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'PPVersionNotices\\' => 
        array (
            0 => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'Pimple' => 
            array (
                0 => __DIR__ . '/..' . '/pimple/pimple/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'PPVersionNotices\\Module\\AdInterface' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/Module/AdInterface.php',
        'PPVersionNotices\\Module\\Footer\\Module' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/Module/Footer/Module.php',
        'PPVersionNotices\\Module\\MenuLink\\Module' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/Module/MenuLink/Module.php',
        'PPVersionNotices\\Module\\TopNotice\\Module' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/Module/TopNotice/Module.php',
        'PPVersionNotices\\ServicesProvider' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/ServicesProvider.php',
        'PPVersionNotices\\Template\\TemplateInvalidArgumentsException' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/Template/TemplateInvalidArgumentsException.php',
        'PPVersionNotices\\Template\\TemplateLoader' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/Template/TemplateLoader.php',
        'PPVersionNotices\\Template\\TemplateLoaderInterface' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/Template/TemplateLoaderInterface.php',
        'PPVersionNotices\\Template\\TemplateNotFoundException' => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src/Template/TemplateNotFoundException.php',
        'Pimple\\Container' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Container.php',
        'Pimple\\Exception\\ExpectedInvokableException' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Exception/ExpectedInvokableException.php',
        'Pimple\\Exception\\FrozenServiceException' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Exception/FrozenServiceException.php',
        'Pimple\\Exception\\InvalidServiceIdentifierException' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Exception/InvalidServiceIdentifierException.php',
        'Pimple\\Exception\\UnknownIdentifierException' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Exception/UnknownIdentifierException.php',
        'Pimple\\Psr11\\Container' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Psr11/Container.php',
        'Pimple\\Psr11\\ServiceLocator' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Psr11/ServiceLocator.php',
        'Pimple\\ServiceIterator' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/ServiceIterator.php',
        'Pimple\\ServiceProviderInterface' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/ServiceProviderInterface.php',
        'Pimple\\Tests\\Fixtures\\Invokable' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/Fixtures/Invokable.php',
        'Pimple\\Tests\\Fixtures\\NonInvokable' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/Fixtures/NonInvokable.php',
        'Pimple\\Tests\\Fixtures\\PimpleServiceProvider' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/Fixtures/PimpleServiceProvider.php',
        'Pimple\\Tests\\Fixtures\\Service' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/Fixtures/Service.php',
        'Pimple\\Tests\\PimpleServiceProviderInterfaceTest' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/PimpleServiceProviderInterfaceTest.php',
        'Pimple\\Tests\\PimpleTest' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/PimpleTest.php',
        'Pimple\\Tests\\Psr11\\ContainerTest' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/Psr11/ContainerTest.php',
        'Pimple\\Tests\\Psr11\\ServiceLocatorTest' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/Psr11/ServiceLocatorTest.php',
        'Pimple\\Tests\\ServiceIteratorTest' => __DIR__ . '/..' . '/pimple/pimple/src/Pimple/Tests/ServiceIteratorTest.php',
        'Psr\\Container\\ContainerExceptionInterface' => __DIR__ . '/..' . '/psr/container/src/ContainerExceptionInterface.php',
        'Psr\\Container\\ContainerInterface' => __DIR__ . '/..' . '/psr/container/src/ContainerInterface.php',
        'Psr\\Container\\NotFoundExceptionInterface' => __DIR__ . '/..' . '/psr/container/src/NotFoundExceptionInterface.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit94bd22b5e0f1f0f3ce6feebfa626e892::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit94bd22b5e0f1f0f3ce6feebfa626e892::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit94bd22b5e0f1f0f3ce6feebfa626e892::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit94bd22b5e0f1f0f3ce6feebfa626e892::$classMap;

        }, null, ClassLoader::class);
    }
}