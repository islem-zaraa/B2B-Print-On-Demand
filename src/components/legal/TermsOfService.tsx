import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing or using PrintFlow's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <div className="space-y-4 text-gray-300">
                <p>Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.</p>
                <p>This license shall automatically terminate if you violate any of these restrictions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Transfer the materials to another person</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                </ul>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p className="text-gray-300">
                The materials on PrintFlow's website are provided on an 'as is' basis. PrintFlow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="text-gray-300">
                In no event shall PrintFlow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use PrintFlow's materials, even if PrintFlow or a PrintFlow authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4 text-green-500">legal@printflow.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}