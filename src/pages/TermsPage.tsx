import React, { useEffect } from 'react';
import { ArrowLeft, FileText, Mail, Phone, Globe, Download } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
  onOpenDownload: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack, onOpenDownload }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5FAF6] text-[#073B35]">
      {/* Policy Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#087F4E]/10 py-4 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#073B35] hover:text-[#087F4E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <a
            href="/downloads/AgroMarket.apk"
            download="AgroMarket.apk"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#087F4E] hover:bg-[#073B35] rounded-xl shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download AgroMarket APK</span>
          </a>
        </div>
      </header>

      {/* Main Terms Document */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-neutral-200/80 shadow-xs">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F4EA] text-[#087F4E] text-xs font-bold mb-4">
            <FileText className="w-4 h-4" />
            <span>Official Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#073B35] tracking-tight">
            Terms and Conditions
          </h1>

          <p className="text-xs text-[#68747D] mt-2 mb-8 pb-6 border-b border-neutral-100 font-medium">
            Last Updated: September 30, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-6 text-sm text-[#073B35]/90 leading-relaxed">
            <p>Welcome to <em>Agro Market</em>.</p>
            
            <p>
              These Terms and Conditions govern your use of the Agro Market mobile application and website at{' '}
              <a href="https://agromarket-blond.vercel.app/" className="text-[#087F4E] font-semibold underline">
                https://agromarket-blond.vercel.app/
              </a>.
            </p>

            <p>
              By creating an account or using Agro Market, you agree to comply with these Terms and Conditions.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              1. About Agro Market
            </h2>
            <p>
              Agro Market is an online agricultural marketplace that connects farmers with buyers.
            </p>
            <p>
              Farmers can list agricultural products available for sale, while buyers can browse listings and submit orders through the platform.
            </p>
            <p>
              Agro Market provides the technology and marketplace services required to facilitate these interactions.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              2. User Accounts
            </h2>
            <p>
              Users must provide accurate information when creating and using an Agro Market account.
            </p>
            <p>Users are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Providing accurate personal and account information;</li>
              <li>Keeping their authentication information secure;</li>
              <li>Using their own account;</li>
              <li>Not impersonating another person; and</li>
              <li>Informing Agro Market if they believe their account has been compromised.</li>
            </ul>
            <p>
              There is no separate age restriction imposed by Agro Market. Users are nevertheless responsible for ensuring that their use of the service is permitted under applicable law.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              3. Buyer Accounts
            </h2>
            <p>
              Every registered Agro Market account can use the platform as a buyer.
            </p>
            <p>
              Buyers may browse available agricultural products, submit order requests, make payments, communicate with farmers through the platform, and manage their orders.
            </p>
            <p>
              A buyer cannot purchase their own agricultural listing.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              4. Farmer Accounts
            </h2>
            <p>
              Users may register as farmers and list agricultural products for sale.
            </p>
            <p>
              Farmers are responsible for providing accurate information about their products, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Crop name;</li>
              <li>Available quantity;</li>
              <li>Price per kilogram;</li>
              <li>Minimum order quantity;</li>
              <li>Harvest date;</li>
              <li>Product photographs; and</li>
              <li>Other information requested by the platform.</li>
            </ul>
            <p>
              Farmers are responsible for maintaining accurate listing information and available stock.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              5. Product Availability and Pricing
            </h2>
            <p>
              Product availability and pricing are determined by the farmer who creates the listing.
            </p>
            <p>
              Agro Market displays information provided by farmers and does not guarantee that every listed product will remain available.
            </p>
            <p>
              A listing may become unavailable when its available quantity reaches zero or when the farmer or Agro Market deactivates the listing.
            </p>
            <p>
              The price shown at the time an order request is created is used for that order.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              6. Placing an Order
            </h2>
            <p>
              A buyer may submit an order request for an available listing.
            </p>
            <p>
              Submitting an order request does not immediately mean that the order has been accepted.
            </p>
            <p>
              The farmer must accept the order before the buyer can proceed with payment.
            </p>
            <p>
              A buyer may cancel an order request before the farmer accepts it.
            </p>
            <p>
              Once the farmer accepts an order, the buyer must make the required payment within the payment period displayed by Agro Market.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              7. Payments
            </h2>
            <p>
              Payments through Agro Market are processed using <em>PayHere</em>.
            </p>
            <p>
              Agro Market does not store customers' full card details.
            </p>
            <p>The amount payable may include:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Product subtotal; and</li>
              <li>Delivery fee, where applicable.</li>
            </ul>
            <p>
              The delivery fee is determined by the farmer when the farmer provides delivery.
            </p>
            <p>
              Payment must be completed through the payment process provided by Agro Market.
            </p>
            <p>
              Cash on delivery is not supported unless Agro Market explicitly introduces such a payment option in the future.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              8. Delivery
            </h2>
            <p>
              Delivery arrangements depend on the option selected when placing an order.
            </p>
            <h3 className="text-base font-bold text-[#073B35]">Buyer-Arranged Delivery</h3>
            <p>
              The buyer may choose to arrange their own transportation or pickup.
            </p>
            <p>
              Where applicable, Agro Market may provide the buyer with the farmer's pickup landmark during the relevant order stages.
            </p>
            <h3 className="text-base font-bold text-[#073B35]">Farmer Delivery</h3>
            <p>
              If the buyer requests delivery from the farmer, the farmer is responsible for arranging the delivery.
            </p>
            <p>
              The farmer may provide delivery using their own transport or an available third-party delivery option supported by Agro Market.
            </p>
            <p>
              The applicable delivery fee is added to the buyer's order total.
            </p>
            <p>
              Agro Market does not guarantee a specific delivery time unless a specific delivery commitment is explicitly displayed for the order.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              9. Order Cancellation
            </h2>
            <p>
              A buyer may cancel an order before the farmer accepts it.
            </p>
            <p>
              After acceptance, cancellation is subject to the order status and applicable refund conditions.
            </p>
            <p>
              A farmer may cancel an order in circumstances where they are unable to fulfill it, subject to the applicable Agro Market procedures.
            </p>
            <p>
              A farmer's repeated failure to fulfill accepted orders may affect their platform reliability statistics.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              10. Refunds and Disputes
            </h2>
            <p>
              Refunds are governed by the Agro Market Refund and Return Policy.
            </p>
            <p>
              Buyers should submit eligible refund or dispute requests through the application within the applicable time period.
            </p>
            <p>
              Agro Market may review relevant order information and communications when resolving a dispute.
            </p>
            <p>Depending on the circumstances, a dispute may result in:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Full refund;</li>
              <li>Partial refund; or</li>
              <li>Release of the applicable payment to the farmer.</li>
            </ul>
            <p>
              Agro Market's refund and dispute procedures do not remove any rights a user may have under applicable law.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              11. In-App Communication
            </h2>
            <p>
              Agro Market provides in-app chat for communication related to individual orders.
            </p>
            <p>Users must not use the chat system to exchange:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Personal phone numbers;</li>
              <li>External contact details;</li>
              <li>Email addresses;</li>
              <li>Social media accounts;</li>
              <li>External payment details;</li>
              <li>External website links; or</li>
              <li>Other information intended to move the transaction outside Agro Market.</li>
            </ul>
            <p>
              Agro Market may automatically detect and block prohibited contact information and may retain blocked messages for platform security and moderation purposes.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              12. Prohibited Activities
            </h2>
            <p>Users must not:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Provide false or misleading information;</li>
              <li>Create fraudulent listings;</li>
              <li>Manipulate product quantities or prices;</li>
              <li>Attempt to purchase their own listing;</li>
              <li>Use Agro Market for unlawful purposes;</li>
              <li>Attempt to access another user's account or private information;</li>
              <li>Circumvent payment or platform security controls;</li>
              <li>Use the platform to distribute harmful or malicious content;</li>
              <li>Attempt to move transactions outside the platform in violation of platform rules; or</li>
              <li>Interfere with the operation or security of Agro Market.</li>
            </ul>
            <p>
              Agro Market may suspend or restrict accounts involved in prohibited activity.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              13. Account Suspension
            </h2>
            <p>
              Agro Market may suspend or restrict an account where there is evidence of:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Fraudulent activity;</li>
              <li>Abuse of the platform;</li>
              <li>Repeated violation of these Terms;</li>
              <li>Security threats;</li>
              <li>Misuse of personal information;</li>
              <li>Repeated failure to fulfill accepted farmer orders; or</li>
              <li>Other activity that may harm users or the platform.</li>
            </ul>
            <p>
              Where appropriate, Agro Market may provide the reason for a suspension.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              14. Intellectual Property & Platform Materials
            </h2>
            <p>
              The Agro Market name, application interface, website content, logos, graphics, software, and other original platform materials are owned by Agro Market or used with appropriate rights.
            </p>
            <p>
              Users may not reproduce, modify, distribute, or commercially exploit Agro Market's platform materials without authorization.
            </p>
            <p>
              Farmers retain responsibility for ensuring that they have the right to use photographs, descriptions, and other content uploaded to their listings.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              15. Third-Party Services
            </h2>
            <p>
              Agro Market may use third-party services to provide functionality such as:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Payment processing;</li>
              <li>Cloud infrastructure;</li>
              <li>Authentication;</li>
              <li>Push notifications;</li>
              <li>Mapping or transportation services; and</li>
              <li>Other technical services.</li>
            </ul>
            <p>
              Third-party services may have their own terms and privacy policies.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              16. Platform Availability
            </h2>
            <p>
              We aim to keep Agro Market available and reliable, but we do not guarantee that the application or website will always be available without interruption.
            </p>
            <p>
              Temporary interruptions may occur because of maintenance, technical failures, network problems, third-party service outages, or circumstances outside our reasonable control.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              17. Limitation of Responsibility
            </h2>
            <p>
              Agro Market provides a marketplace platform connecting buyers and farmers.
            </p>
            <p>
              Farmers are responsible for the accuracy of their listings and the fulfillment of their accepted orders.
            </p>
            <p>
              Buyers are responsible for providing accurate information required for their orders and delivery.
            </p>
            <p>
              Agro Market will take reasonable steps to operate the platform and facilitate transactions but cannot guarantee the quality, availability, or suitability of every agricultural product listed by an individual farmer.
            </p>
            <p>
              Nothing in these Terms is intended to exclude or limit any responsibility that cannot legally be excluded or limited under applicable law.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              18. Changes to These Terms
            </h2>
            <p>
              Agro Market may update these Terms and Conditions when necessary.
            </p>
            <p>
              Updated terms will be published on this page with a revised "Last Updated" date.
            </p>
            <p>
              Continued use of Agro Market after an update means that the user acknowledges the updated Terms, subject to applicable law.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              19. Contact Us
            </h2>
            <p>
              If you have questions regarding these Terms and Conditions, please contact us:
            </p>

            <div className="mt-4 p-5 rounded-2xl bg-[#F5FAF6] border border-neutral-200/80 space-y-2 text-sm">
              <div className="font-extrabold text-[#073B35]">Agro Market</div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Mail className="w-4 h-4 text-[#087F4E]" />
                <span>Email: <a href="mailto:agromarketlk@gmail.com" className="text-[#087F4E] font-medium underline">agromarketlk@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Phone className="w-4 h-4 text-[#087F4E]" />
                <span>Phone: <a href="tel:0767257041" className="text-[#087F4E] font-medium">0767257041</a></span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Globe className="w-4 h-4 text-[#087F4E]" />
                <span>Website: <a href="https://agromarket-blond.vercel.app" className="text-[#087F4E] font-medium underline">https://agromarket-blond.vercel.app/</a></span>
              </div>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-neutral-100 flex justify-between items-center">
            <button
              type="button"
              onClick={onBack}
              className="text-xs font-bold text-[#087F4E] hover:underline"
            >
              ← Back to Main Page
            </button>
            <span className="text-xs text-neutral-400">© 2026 Agro Market</span>
          </div>

        </div>
      </main>
    </div>
  );
};
