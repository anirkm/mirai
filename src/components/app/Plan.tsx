import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PlanComponent() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">
          Choose the plan that fits your needs
        </h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mx-auto mt-4">
          Upgrade, downgrade, or cancel at any time. No contracts, no hidden
          charges.
        </p>
        <div className="grid gap-6 mt-12 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div className="text-3xl font-bold">$0</div>
              <ul className="space-y-2">
                <li>Up to 5 users</li>
                <li>Basic support</li>
                <li>2GB storage</li>
                <li>Basic analytics</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Get started
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div className="text-3xl font-bold">$49/mo</div>
              <ul className="space-y-2">
                <li>Unlimited users</li>
                <li>Premium support</li>
                <li>50GB storage</li>
                <li>Advanced analytics</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get started</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Custom</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div className="text-3xl font-bold">Contact us</div>
              <ul className="space-y-2">
                <li>Custom number of users</li>
                <li>24/7 support</li>
                <li>Unlimited storage</li>
                <li>Custom features</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tighter text-center sm:text-4xl">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-6 mt-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">How do I pay?</h4>
              <p className="text-gray-500 dark:text-gray-400">
                You can use any major credit card to pay for your subscription.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Can I cancel my subscription?</h4>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, you can cancel your subscription at any time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                What happens if I want to upgrade?
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                You can upgrade your subscription at any time. You will be
                charged the difference between your current subscription and the
                new one.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Do you offer discounts for teams?
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer significant discounts for large teams. Please
                contact our sales team for more information.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tighter text-center sm:text-4xl">
            Payment Methods
          </h3>
          <div className="mt-8 flex justify-center space-x-4">
            <section className="grid gap-6 p-4 md:p-6 w-full lg:grid-cols-2">
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="bg-zinc-900 p-4 dark:bg-gray-950">
                  <CreditCardIcon className="h-6 w-6 mb-2" />
                  <h3 className="font-bold text-xl">Credit Card</h3>
                  <p className="text-sm text-gray-500">Safe and secure</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="bg-zinc-900 p-4 dark:bg-gray-950">
                  <CreditCardIcon className="h-6 w-6 mb-2" />
                  <h3 className="font-bold text-xl">PayPal</h3>
                  <p className="text-sm text-gray-500">Fast and easy</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="bg-zinc-900 p-4 dark:bg-gray-950">
                  <BitcoinIcon className="h-6 w-6 mb-2" />
                  <h3 className="font-bold text-xl">Bitcoin</h3>
                  <p className="text-sm text-gray-500">Digital currency</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="bg-zinc-900 p-4 dark:bg-gray-950">
                  <BanknoteIcon className="h-6 w-6 mb-2" />
                  <h3 className="font-bold text-xl">Bank Transfer</h3>
                  <p className="text-sm text-gray-500">Direct payment</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tighter text-center sm:text-4xl">
            Plan Comparison
          </h3>
          <div className="flex items-center overflow-x-auto mt-8">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

function BanknoteIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function BitcoinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}

function CreditCardIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
