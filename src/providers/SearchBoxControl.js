import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";

const SearchBoxControl = ({setIsSearchVisible,toggleNavbar}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filteredComponents, setFilteredComponents] = useState([]);
  const { cache } = useSWRConfig();
  const navigate = useNavigate();
  const searchableProperties = ["heading", "subHeading", "description"];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      setIsFilterVisible(true);
      const filtered = Array.from(cache.keys())
        .filter((key) => {
          const content = cache.get(key)?.data?.items[0]?.Properties;
          if (!content) return false;
          const parsedProperties = JSON.parse(content);
          return searchableProperties.some((property) =>
            parsedProperties[property]
              ?.toLowerCase()
              .includes(e.target.value.toLowerCase())
          );
        })
        .map((key) => ({
          key,
          content: cache.get(key),
        }));
      setFilteredComponents(filtered);
    } else {
      setFilteredComponents([]);
    }
  };

  const navigateToComponent = (cacheKey) => {
    const componentElement = document.getElementById(cacheKey);
    if (componentElement) {
      window.scrollTo({
        top: componentElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleResultClick = (cacheKey) => {
    const pageURL = cacheKey.split("#")[1];

    setIsFilterVisible(false);
    if (pageURL !== window.location.pathname) {
      navigate(`${pageURL}`);
      setTimeout(() => navigateToComponent(cacheKey), 1000);
    }
    navigateToComponent(cacheKey);
  };

  const displayProperties = (properties, searchTerm) => {
    const parsedProperties = JSON.parse(properties);
    return searchableProperties.map((key) => {
      const value = parsedProperties[key]?.toLowerCase();
      if (value) {
        const nextSpaceIndex = value.indexOf(" ", searchTerm.length);
        let trimmedValue;

        if (nextSpaceIndex === -1) {
          trimmedValue = value;
        } else {
          trimmedValue =
            value.substring(
              0,
              nextSpaceIndex +
                value.substring(nextSpaceIndex + 1).indexOf(" ") +
                1
            ) + "...";
        }

        return (
          value.includes(searchTerm.toLowerCase()) && (
            <li key={key} className="underline">
              {trimmedValue}
            </li>
          )
        );
      }
      return null;
    });
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "250px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          value={searchTerm}
          autoFocus={true}
          onChange={handleSearch}
          placeholder="Search..."
          style={{
            width: "100%",
            padding: "5px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {filteredComponents.length > 0 && (
          <ul
            style={{
              position: "absolute",
              width: "100%",
              maxHeight: "200px",
              overflowY: "auto",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: "1000",
            }}
          >
            {filteredComponents.map((component, index) => {
              const properties = component.content?.data?.items[0]?.Properties;
              return (
                <>
                  {isFilterVisible && (
                    <li
                      key={index}
                      onClick={() => {
                        handleResultClick(component.key);
                        setIsSearchVisible(false)
                        setSearchTerm("");
                        toggleNavbar()
                      }}
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #f0f0f0",
                        cursor: "pointer",
                      }}
                    >
                      <ul
                        style={{ listStyle: "none", padding: "0", margin: "0" }}
                      >
                        {displayProperties(properties, searchTerm)}
                      </ul>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBoxControl;
