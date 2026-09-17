import { MapPin, ArrowDown, ExternalLink } from "lucide-react";

function App() {
  // ==========================================
  // EDIT YOUR CONTENT HERE
  // ==========================================

  const eventName = "SAFETY AND HEALTH FAIR 2026";

  const programmeImages = [
    "/images/1-prog.jpg",
    "/images/2-prog.jpg",
  ];

  const locationImage = "/images/gmap.jpg";

  const googleMapsLink =
    "https://maps.google.com/";

  // ==========================================
  // END OF EDITABLE CONTENT
  // ==========================================

  return (
    <main className="page">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            MACROASIA <br />
            AIRPORT SERVICES CORPORATION
          </p>

          <h1>
            {eventName}
          </h1>



          <a
            href="#programme"
            className="scroll-button"
          >
            <span>View Programme</span>
            <ArrowDown size={17} strokeWidth={1.5} />
          </a>

        </div>

      </section>


      {/* =====================================
          PROGRAMME
      ====================================== */}

      <section
        id="programme"
        className="programme-section"
      >

        <div className="section-heading">

          <span className="section-number">
            01
          </span>

          <div>
            <p className="section-label">
              THE DAY
            </p>

            <h2>
              Programme
            </h2>
          </div>

        </div>


        <div className="programme-images">

          {programmeImages.map((image, index) => (
            <div
              className="programme-card"
              key={image}
            >

              <div className="image-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <img
                src={image}
                alt={`Programme page ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />

            </div>
          ))}

        </div>

      </section>


      {/* =====================================
          LOCATION
      ====================================== */}

      <section className="location-section">

        <div className="section-heading">

          <span className="section-number">
            02
          </span>

          <div>
            <p className="section-label">
              FIND US
            </p>

            <h2>
              Location
            </h2>
          </div>

        </div>


        <div className="location-content">

          <div className="location-image-wrapper">

            <img
              src={locationImage}
              alt="Event location"
              loading="lazy"
            />

          </div>


          <div className="location-details">

            <div className="location-icon">
              <MapPin
                size={22}
                strokeWidth={1.5}
              />
            </div>

            <div>

              <p className="location-label">
                VENUE
              </p>

              <h3>
                Event Location
              </h3>

              <p className="location-text">
                Please use the map below to
                navigate to the venue.
              </p>

            </div>

          </div>


          <a
            href={"https://www.google.com/maps/place/UTI/@14.4948082,120.9984718,17z/data=!3m1!4b1!4m6!3m5!1s0x3397ce903bb1355f:0x5a6fc46fd8011ad7!8m2!3d14.494803!4d121.0010467!16s%2Fg%2F11gwgfzr_6?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"}
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >

            <MapPin size={18} strokeWidth={1.6} />

            <span>
              View Location on Google Maps
            </span>

            <ExternalLink
              size={16}
              strokeWidth={1.5}
            />

          </a>

        </div>

      </section>


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer className="footer">

        <p>
          Thank you for celebrating with us.
        </p>

        <span>
          {eventName}
        </span>

      </footer>

    </main>
  );
}

export default App;