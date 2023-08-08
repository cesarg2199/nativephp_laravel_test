<?php

namespace App\Providers;

use Native\Laravel\Menu\Menu;
use Native\Laravel\Facades\MenuBar;


class NativeAppServiceProvider
{
    /**
     * Executed once the native application has been booted.
     * Use this method to open windows, register global shortcuts, etc.
     */
    public function boot(): void
    {
        MenuBar::create()
            ->width(400)
            ->height(600)
            ->withContextMenu(
                Menu::new()
                    ->label('Author: Cesar Guerrero')
                    ->separator()
                    ->quit()
            );

        
    }
}
