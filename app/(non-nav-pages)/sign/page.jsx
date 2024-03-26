import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Sign() {
  return (
    <main className="flex flex-row justify-center items-center ">
      <Tabs defaultValue="sign-in" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Sign-in</TabsTrigger>
          <TabsTrigger value="sign-up">Sign-up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card className="">
            <CardHeader className="text-center">
              <CardTitle>Sign-in</CardTitle>
              <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="@username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>
            </CardContent>
            <CardFooter className="items-center justify-between">
              <div className="flex items-center space-x-2 pl-2">
                <Checkbox id="remember" className="rounded-[5px]" />
                <Label
                  htmlFor="remember"
                  className="text-sm font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  Remember me
                </Label>
              </div>
              <Link href={"/"}>
              <Button>SUBMIT</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Sign-up</CardTitle>
              <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter Your Name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="email@domain.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="current">Password</Label>
                <Input
                  id="current"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Confirm Password</Label>
                <Input
                  id="new"
                  type="password"
                  placeholder="Enter The Same Password"
                />
              </div>
            </CardContent>
            <CardFooter className="items-center justify-between">
              <div className="flex items-center space-x-2 pl-2">
                <Checkbox id="terms" className="rounded-[5px]" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  Agree to terms and conditions
                </Label>
              </div>
              <Link href={"/"}>
              <Button>SIGN-UP</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
