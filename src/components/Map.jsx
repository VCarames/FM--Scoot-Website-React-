import MobileImg from "/src/assets/images/world-map-mobile.png";
import TabletImg from "/src/assets/images/world-map-tablet.png";
import DekstopImg from "/src/assets/images/world-map-desktop.png";

function Locations() {
  return (
    <>
      <>
        <picture className="locations-section__picture">
          <source media="(min-width: 73.44rem)" srcSet={DekstopImg} />
          <source media="(min-width: 43.75rem)" srcSet={TabletImg} />
          <img src={MobileImg} alt="" />
        </picture>
        <ul className="locations-section__list-cities" role="list">
          <li
            className="locations-section__list-item item--new-york"
            role="listitem"
          >
            <h3 className="locations-section__list-city city city--new-york">
              New York
            </h3>
          </li>
          <li
            className="locations-section__list-item item--london"
            role="listitem"
          >
            <h3 className="locations-section__list-city city city--london">
              London
            </h3>
          </li>
          <li
            className="locations-section__list-item item--jakarta"
            role="listitem"
          >
            <h3 className="locations-section__list-city city city--jakarta">
              Jakarta
            </h3>
          </li>
          <li
            className="locations-section__list-item item--yokohama"
            role="listitem"
          >
            <h3 className="locations-section__list-city city city--yokohama">
              Yokohama
            </h3>
          </li>
        </ul>
      </>
    </>
  );
}

export default Locations;
