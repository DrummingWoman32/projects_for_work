using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Animals
{
    class Animals
    {
        public enum animalTypes
        {
            mammal, bird, reptile, fish, amphibian, insect, other, unknown            //just thought I'd include "other" just in case
        };

        public enum habitats
        {
            rainforest, savannah, grassland, ocean, swamp, jungle, desert, taiga, tundra, other
        };

        public enum Eaters
        {
            carnivore, herbivore, omnivore
        };

        public enum active
        {
            diurnal, nocturnal, crepuscular, cathemeral
        };

        private String species_name;          //member variables
        private animalTypes animalType;             //like mammal, bird, reptile...
        //private String name;                   //John, Rose, Mercedes, ...
        private habitats habitat;
        private Eaters typeOfEater;
        private bool filmed;
        private active whenActive;            //diurnal, nocturnal

        struct Video {                              //for videos of animals

            public String title;
            public String filmmakers;
            public String date;
            public String animalsFilmed;
            public String location;
            public String environment;
            public String duration;                  //Trying to decide if this is string or number type...string like 2 hours and 30 minutes, for example
        };

            //default constructor

            public Animals()
            {
                this.species_name = "";
                this.animalType = animalTypes.unknown;
                //this.name = "";
                this.habitat = 0;
                this.typeOfEater = 0;
                this.filmed = false;
                this.whenActive = 0;
                
            }

            //other constructor where they've got to give me everything about each animal object

            public Animals(String species_name, animalTypes animalType, habitats habitat, Eaters typeOfEater, bool filmed, active whenActive)
            {
                this.species_name = species_name;
                this.animalType = animalType;
                //this.name = name;
                this.habitat = habitat;
                this.typeOfEater = typeOfEater;
                this.filmed = filmed;
                this.whenActive = whenActive;
            }

            //getters (at least one for now)

            public String getSpeciesName()
            {
                return species_name;

            }

            public animalTypes getAnimalType()
            {
                return animalType;
            }

            /*public String getName()
            {
                return name;
            }*/

            public habitats getHabitat()
            {
                return habitat;
            }

            public Eaters getTypeOfEater()
            {
                return typeOfEater;
            }

            public bool getHasBeenFilmed()
            {
                return filmed;
            }

            public active getWhenActive()
            {
                return whenActive;
            }

            //setters
            public String setSpeciesName(String species_name)
            {
                this.species_name = species_name;
                return this.species_name;

            }

            public animalTypes setAnimalType(animalTypes type)
            {
                this.animalType = type;
                return this.animalType;
            }

            /*public String setName(String name)
            {
                this.name = name;
                return this.name;
            }*/

            public habitats setHabitat(habitats habitat)
            {

                this.habitat = habitat;
                return this.habitat;
            }

            public Eaters setTypeOfEater(Eaters typeOfEater)
            {
                this.typeOfEater = typeOfEater;
                return this.typeOfEater;
            }

            public bool setFilmed(bool filmed)
            {
                this.filmed = filmed;
                return this.filmed;
            }

            public active setWhenActive(active whenActive)
            {
                this.whenActive = whenActive;
                return this.whenActive;
            }
            

            //methods and functions, at least two 

            public Animals DisplayAnimal(Animals animal)
            {
                //Animals animal = new Animals(species_name, animalType, name, habitat, typeOfEater, filmed, whenActive);
                Console.WriteLine("The current data on this animal is: ");
                Console.WriteLine();
                Console.WriteLine("Species: {0}", species_name);
                Console.WriteLine();
                Console.WriteLine("Animal Type: {0}", animalType.ToString());
                Console.WriteLine();
                //Console.WriteLine("Name: {0}", name);
                //Console.WriteLine();
                Console.WriteLine("Habitat: {0}", habitat.ToString());
                Console.WriteLine();
                Console.WriteLine("Type of eater: {0}", typeOfEater.ToString());
                Console.WriteLine();
                Console.WriteLine("Filmed: {0}", filmed);
                Console.WriteLine();
                Console.WriteLine("When active: {0}", whenActive.ToString());
                Console.WriteLine();

                return animal;
            }



            public bool filmAnimal(Animals animal)   
            {
                //we want to film animals and the stuff they do, so we find them first in order to do so

                /*bool found = true;

                if(!found)
                {
                //look for animal
                Console.WriteLine("Searching for animal to film...");

                }*/

                //Animals animal = new Animals();

                Video video;

                Console.WriteLine("What will be the title of this video (type rough draft if uncertain): ");
                video.title = Convert.ToString(Console.ReadLine());

                Console.WriteLine();

                Console.WriteLine("Who is(are) the filmmaker(s)? : ");
                video.filmmakers = Convert.ToString(Console.ReadLine());

                Console.WriteLine();

                Console.Write("What one animal by species name would you like to film? (Type something like gazelle, giraffe, etc. : ");
                String speciesName;
                speciesName = Convert.ToString(Console.ReadLine());
                animal.species_name = speciesName;
                video.animalsFilmed = animal.species_name;

                Console.WriteLine();

                //Console.WriteLine("Okay, let's search for {0}...", animal.species_name);

                //I wonder if I need to ask for the type of the animal and everything else...I guess I could ask for where the animal will be filmed and probably when...

                //to identify the animal for the time being, let's ask for the name of the animal

                /*Console.WriteLine("What is the name of the animal to film? : ");
                animal.name = Convert.ToString(animal.name);*/

                Console.WriteLine("Where are we filming this animal? : ");
                video.location = Convert.ToString(Console.ReadLine());

                Console.WriteLine();

                Console.WriteLine("In what natural environment are we filming this animal? : ");
                /*String habitat;
                habitat = Convert.ToString(Console.ReadLine());
                animal.setHabitat(habitat);*/
                //animal.habitat.ToString() = habitat;

                // Colors colorValue = (Colors) Enum.Parse(typeof(Colors), colorString);  

                String habitatValue;
                habitatValue = Convert.ToString(Console.ReadLine());
                //Parse(habitats, habitat);
                habitats habitat = (habitats)Enum.Parse(typeof(habitats), habitatValue);
                animal.setHabitat(habitat);
                video.environment = habitatValue;

                Console.WriteLine();

                Console.WriteLine("When are we filming this animal? : ");
                /*String timeOfDay;
                timeOfDay = Convert.ToString(Console.ReadLine());                  //morning, afternoon, night*/
                video.date = Convert.ToString(Console.ReadLine());

                Console.WriteLine();

                Console.WriteLine("How long will the video of this animal be? : ");
                video.duration = Convert.ToString(Console.ReadLine());

                Console.WriteLine();

                Console.WriteLine("Off we go!\n");

                animal.filmed = true;

                Console.WriteLine();

                Console.WriteLine("Animal has been filmed.\n");

                return animal.filmed;

        }

        /*public String DisplayVideoDetails()
        {

        }*/

            public bool Fly(Animals animal)
            {
            //Animals animal = new Animals(String species_name, String animalType, String name, String habitat, String typeOfEater, bool filmed, String whenActive);
            //Animals animal = new Animals();
            //habitats habitat = (habitats)Enum.Parse(typeof(habitats), habitatValue);
            
            bool canFly;
                if(animal.animalType.ToString() == "bird" || animal.species_name == "bat")
                {
                    canFly = true;
                    Console.WriteLine("This animal can fly! Flying now!");
                    return canFly;
                }

                if(animal.animalType.ToString() == "insect")
                {
                    Console.WriteLine("Does the insect have wings? : ");
                    String hasWings;
                    hasWings = Convert.ToString(Console.ReadLine());

                    if(hasWings == "yes" || hasWings == "Yes")
                    {
                        canFly = true;
                        Console.WriteLine();
                        Console.WriteLine("This animal can fly! Flying now!");
                        return canFly;
                    }
                }

                /*Console.WriteLine("Is the animal flying now? : ");
                String isFlying;*/
                canFly = false;
                return canFly;
            
            }


            public bool Swim(Animals animal)
            {
                //Animals animal = new Animals();
                bool canSwim;
                if(animal.animalType.ToString() == "fish" && animal.habitat.ToString() == "ocean") //|| animal.species_name == "bear" || animal.species_name == "seal")
                {
                    canSwim = true;
                    Console.WriteLine("This animal can swim! Swimming now!");
                    return canSwim;
                }

                if(animal.habitat.ToString() == "ocean" && animal.animalType.ToString() == "mammal")     //dolphin, whale, seal
                {
                    canSwim = true;
                    Console.WriteLine("This animal can swim! Swimming now!");
                    return canSwim;
                }

                //there are probably a bunch of animals who can swim, so what if I just ask if the animal is observed swimming or something...I don't know...

                Console.WriteLine("There are many animals who can swim. Is the animal swimming now or looks like she/he wants to? : ");
                String probablySwim;
                probablySwim = Convert.ToString(Console.ReadLine());
                if(probablySwim == "yes" || probablySwim == "Yes")
                {
                    Console.WriteLine();
                    Console.WriteLine("This animal can probably swim. Wait and see...");
                    canSwim = true;
                    return canSwim;
                }

                else
                {
                    Console.WriteLine();
                    Console.WriteLine("More information on animal needed, then. ");
                    canSwim = false;
                    //return canSwim;
                }

                canSwim = false;
                return canSwim;
            
            }

          
    }

   
}
