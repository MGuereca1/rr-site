import { useEffect } from "react"

const Terms = () => {

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Services</h1>
      <div className="prose prose-lg">
        <p className="mb-4">
          <strong>Last updated:</strong> 09/13/2025
        </p>
        
        <p className="mb-6">
          By using this website, you agree to the following terms:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Use of This Website</h2>
            <p>
              You agree to use this website only for lawful purposes and not to submit any harmful, offensive, or spam content through our contact form.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. No Guarantees</h2>
            <p>
              We make no guarantees that our website or contact form will always be available, error-free, or secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Limitation of Liability</h2>
            <p>
              We are not responsible for any damages that may occur from using this website or from any issues with email delivery via third-party services like EmailJS.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service at any time. Continued use of this site after changes means you accept the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
            <p>
              For questions about these terms, please contact us at:
              <br />
              📧 rrconstruction.solutions1@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/* back to home */}
      <div className="mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/" 
            className="inline-flex items-center text-yellow-400 hover:text-blue-800 transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
    </div>
  )
}

export default Terms