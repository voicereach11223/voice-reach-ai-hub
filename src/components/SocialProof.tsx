import { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import nexteraLogo from "@/assets/logos/nextera.png";
import firstSolarLogo from "@/assets/logos/first-solar.png";
import jinkoSolarLogo from "@/assets/logos/jinko-solar.png";
import canadianSolarLogo from "@/assets/logos/canadian-solar.png";
import sunpowerLogo from "@/assets/logos/sunpower.png";
import sunEraEnergyLogo from "@/assets/logos/sun-era-energy.png";
import sunrunLogo from "@/assets/logos/sunrun.png";

function NextEraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img src={nexteraLogo} alt="NextEra Energy" className={props.className} />
  );
}

function FirstSolarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img src={firstSolarLogo} alt="First Solar" className={props.className} />
  );
}

function JinkoSolarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img src={jinkoSolarLogo} alt="Jinko Solar" className={props.className} />
  );
}

function CanadianSolarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img src={canadianSolarLogo} alt="Canadian Solar" className={props.className} />
  );
}

function SunPowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img src={sunpowerLogo} alt="SunPower" className={props.className} />
  );
}

function SunEraEnergyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img src={sunEraEnergyLogo} alt="Sun Era Energy" className={props.className} />
  );
}

function SunrunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <img src={sunrunLogo} alt="Sunrun" className={props.className} />
  );
}

const solarLogos = [
  { name: "NextEra Energy", id: 1, img: NextEraIcon },
  { name: "First Solar", id: 2, img: FirstSolarIcon },
  { name: "Jinko Solar", id: 3, img: JinkoSolarIcon },
  { name: "Canadian Solar", id: 4, img: CanadianSolarIcon },
  { name: "SunPower", id: 5, img: SunPowerIcon },
  { name: "Sun Era Energy", id: 6, img: SunEraEnergyIcon },
  { name: "Sunrun", id: 7, img: SunrunIcon },
];

const SocialProof = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
          <div className="text-center">
            <GradientHeading variant="secondary" size="sm">
              Trusted by Leading Solar & Energy Companies
            </GradientHeading>
          </div>

          <LogoCarousel columnCount={3} logos={solarLogos} />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
