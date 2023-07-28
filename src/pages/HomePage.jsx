import React from "react";
import { Link } from "react-router-dom";

function HomePage({ companies }) {
    return (
        <div>
            <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
            {companies.map((company) => (
                <Link to={`/company/${company.slug}`} key={company.slug}>
                    {/* Wrap the content in a fragment or JSX tags */}
                    <div>
                        {company.name} <img src={company.logo} alt={company.name} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default HomePage;
