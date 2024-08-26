function Header() {
  return (
    <header className="mb-8">
      <div className="text-xl font-bold"> CyDef.exe</div>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-green-300">
              cd /home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-300">
              cd /about
            </a>
          </li>
          <li>
            <a href="#upcoming-events" className="hover:text-green-300">
              cd /events
            </a>
          </li>
          <li>
            <a href="#resources" className="hover:text-green-300">
              cd /resources
            </a>
          </li>
          <li>
            <a href="#footer" className="hover:text-green-300">
              cd /contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
