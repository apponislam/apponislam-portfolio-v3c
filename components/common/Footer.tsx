import Link from "next/link";
import { personalInfo } from "../../app/data/index";
import { CodeXml, UserCircle, Send, Mail, MapPin } from "lucide-react";

const icons: { [key: string]: any } = {
  CodeXml,
  UserCircle,
  Send,
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="text-3xl font-bold tracking-tighter">
            AI<span className="text-primary">.</span>
          </Link>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            {personalInfo.tagline}
          </p>
          <div className="flex items-center space-x-4">
            {personalInfo.socials.map((social) => {
              const Icon = icons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            </li>
            <li>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>{personalInfo.email}</span>
            </li>
            <li className="flex items-center space-x-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{personalInfo.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/50 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
