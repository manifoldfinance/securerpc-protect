import { Github } from "lucide-react"
import Link from "next/link"
import { Footer } from "../components/footer"
import { SiteSearch } from "../components/site-search"

export default function SecurityPage() {
  return (
    <>
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Security</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment to Security</h2>
          <p className="mb-4">
            At SecureRPC, we prioritize the security and integrity of our infrastructure and your
            data. Our team of security experts continuously monitors and improves our systems to
            ensure the highest level of protection.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">PGP Keys</h2>
          <p className="mb-4">For secure communication, you can use our PGP public key:</p>
          <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm text-white">
              -----BEGIN PGP PUBLIC KEY BLOCK-----
              xjMEZIeA2hYJKwYBBAHaRw8BAQdAH/2iyL9V9oYhN1NF0quphL0cOg8kNB4F
              Udkm6V1TluvNI1NhbSBCYWNoYSA8c2FtQG1hbmlmb2xkZmluYW5jZS5jb20+
              wq0EEBYKAD4FgmSHgNoECwkHCAmQ93P41qGm2AIDFQgKBBYAAgECGQECmwMC
              HgEWIQTqguJDjmP0vcSr9FP3c/jWoabYAgAhCRD3c/jWoabYAhYhBOqC4kOO
              Y/S9xKv0U/dz+NahptgCJBIA/jfX5RGUHrNu8sqyTE5FqhTeRw7BnN/gHKEF
              bv/BbIySAP9MX3apKFFAwhI7eWNDsZEG5RENIUNc3/qJ9lk5lR28BM44BGSH
              gNoSCisGAQQBl1UBBQEBB0CUKxjVJRtITDceDXB2pldYkmLfFZSr8R6q5Tyu
              dsQfUQMBCAfCmQQYFggAKgWCZIeA2gmQ93P41qGm2AICmwwWIQTqguJDjmP0
              vcSr9FP3c/jWoabYAgAhCRD3c/jWoabYAhYhBOqC4kOOY/S9xKv0U/dz+Nah
              ptgCwqQBAKCbXzNUFofC5DiT37Vrwe/xq+NI7TMuWkjQvxKSFJK7AQC9rQxQ
              jbeIFPGcvNUG6xIPj/sdqLp2Fym35Q28jD2ZAw== =IfjR -----END PGP PUBLIC KEY BLOCK-----
            </code>
          </pre>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Responsible Disclosure</h2>
          <p className="mb-4">
            If you believe you've found a security vulnerability in our systems, please responsibly
            disclose it to us by emailing sam -at- manifoldfinance.com
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Security Audits</h2>
          <p className="mb-4">
            We regularly conduct third-party security audits of our infrastructure and smart
            contracts. You can find our latest audit reports here:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="https://github.com/manifoldfiance/security"
                className="text-blue-400 hover:underline"
              >
                2023 Infrastructure Audit Report
              </a>
            </li>
            <li>
              <a
                href="https://github.com/manifoldfiance/security"
                className="text-blue-400 hover:underline"
              >
                2023 Smart Contract Audit Report
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
