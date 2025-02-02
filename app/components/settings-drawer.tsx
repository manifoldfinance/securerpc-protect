"use client"

import React from "react"
import { Drawer } from "vaul"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SettingsDrawer() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false)

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline">Settings</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Description id="settings-drawer-description" className="sr-only">
          Adjust your application settings including dark mode and notifications.
        </Drawer.Description>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="bg-[#1C1C1C] flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0"
          aria-describedby="settings-drawer-description"
        >
          <div className="p-4 bg-[#141414] rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-700 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4 text-2xl text-white">Settings</Drawer.Title>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark-mode" className="text-white">
                    Dark Mode
                  </Label>
                  <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications" className="text-white">
                    Enable Notifications
                  </Label>
                  <Switch
                    id="notifications"
                    checked={isNotificationsEnabled}
                    onCheckedChange={setIsNotificationsEnabled}
                  />
                </div>
                <div className="pt-4">
                  <Button className="w-full" onClick={() => alert("Settings saved!")}>
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
};