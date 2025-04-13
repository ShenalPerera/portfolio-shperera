
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Award,
  ExternalLink,
  Medal,
  Calendar,
  FileCheck,
  Trophy,
  Construction
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

const Certifications = () => {
  // Add your certifications here
  const certifications = [
    {
      id: "cert-1",
      name: "Angular - The Complete Guide",
      issuer: "Udemy",
      date: "Sep 2023",
      credentialId: "UC-ee6a11d7-8c96-4653-a8b9-ab8ceeeef6c1",
      credentialUrl: "https://www.udemy.com/certificate/UC-ee6a11d7-8c96-4653-a8b9-ab8ceeeef6c1/",
      category: ["Angular"],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_200_200/company-logo_200_200/0/1723593046388/udemy_logo?e=1750291200&v=beta&t=MfOxv1s5K3cQfGmM5wjc4HVg6Mmk8Ql_EVPSAWG9CGM"
    },
    {
      id: "cert-2",
      name: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      issuer: "Udemy",
      date: "Oct 2022",
      credentialId: "UC-e214ef15-0156-470a-9d59-70c49d2d3544",
      credentialUrl: "https://www.udemy.com/certificate/UC-e214ef15-0156-470a-9d59-70c49d2d3544/",
      category: ["Node JS", "REST", "MVC"],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_200_200/company-logo_200_200/0/1723593046388/udemy_logo?e=1750291200&v=beta&t=MfOxv1s5K3cQfGmM5wjc4HVg6Mmk8Ql_EVPSAWG9CGM"
    },
    {
      id: "cert-3",
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      issuer: "Udemy",
      date: "Nov 2021",
      credentialId: "UC-a57e50b3-66eb-4057-aff1-ac422d258528",
      credentialUrl: "https://www.udemy.com/certificate/UC-a57e50b3-66eb-4057-aff1-ac422d258528/",
      category: ["React"],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_200_200/company-logo_200_200/0/1723593046388/udemy_logo?e=1750291200&v=beta&t=MfOxv1s5K3cQfGmM5wjc4HVg6Mmk8Ql_EVPSAWG9CGM"
    },
    {
      id: "cert-4",
      name: "The OWASP Top 10 - Deep Dive",
      issuer: "Udemy",
      date: "Jan 2024",
      credentialId: "UC-70631e77-2b31-436f-acf8-ddaf559afd5e",
      credentialUrl: "https://ude.my/UC-70631e77-2b31-436f-acf8-ddaf559afd5e",
      category: ["Web Application Security"],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_200_200/company-logo_200_200/0/1723593046388/udemy_logo?e=1750291200&v=beta&t=MfOxv1s5K3cQfGmM5wjc4HVg6Mmk8Ql_EVPSAWG9CGM"
    },
  ];

  // Add your awards here
  const awards = [];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 primary-gradient inline-block">
              Certifications & Awards
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional qualifications and recognitions that showcase my expertise and achievements
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="certificates" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="certificates" className="text-base">
                  <FileCheck className="mr-2 h-4 w-4" />
                  Certifications
                </TabsTrigger>
                <TabsTrigger value="awards" className="text-base">
                  <Medal className="mr-2 h-4 w-4" />
                  Awards
                </TabsTrigger>
              </TabsList>

              <TabsContent value="certificates" className="border border-border/50 rounded-lg p-6 bg-secondary/5">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Professional Certifications</h2>
                </div>

                <div className="space-y-6">
                  {certifications.length > 0 ? (certifications.map((cert) => (
                    <Card key={cert.id} className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-20 p-4 flex justify-center items-center bg-secondary/20 md:border-r border-border/50">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center bg-background">
                              <img src={cert.logo} alt={cert.issuer} className="w-8 h-8" />
                            </div>
                          </div>

                          <div className="flex-1 p-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                              <div>
                                <h3 className="text-xl font-semibold text-foreground mb-1">{cert.name}</h3>
                                <p className="text-muted-foreground text-sm">{cert.issuer}</p>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
                                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                                    <Calendar className="h-3.5 w-3.5" />
                                    <span>Issued {cert.date}</span>
                                  </div>

                                  {cert.category && cert.category.map((cat, index) => (
                                      <Badge key={index} variant="outline" className="w-fit mr-2">
                                        {cat}
                                      </Badge>
                                  ))}
                                </div>

                                <div className="mt-4">
                                  <p className="text-sm text-muted-foreground mb-1">
                                    <span className="font-medium">Credential ID:</span> <span className="font-mono">{cert.credentialId}</span>
                                  </p>
                                </div>
                              </div>

                              <div className="flex-shrink-0">
                                <Button variant="outline" size="sm" className="gap-1" asChild>
                                  <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5"
                                  >
                                    <span>Show credential</span>
                                    <ExternalLink className="h-3.5 w-3.5" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))):(
                      <Alert className="mb-6 border-amber-500/30 bg-amber-500/10">
                        <Construction className="h-5 w-5 text-amber-500" />
                        <AlertTitle className="text-amber-500">Under Development</AlertTitle>
                        <AlertDescription>
                          This section is currently being updated with more award details. Check back soon for a complete list of awards and recognitions.
                        </AlertDescription>
                      </Alert>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="awards" className="border border-border/50 rounded-lg p-6 bg-secondary/5">
                <div className="flex items-center gap-3 mb-6">
                  <Medal className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Awards & Recognitions</h2>
                </div>

                <div className="space-y-6">
                  {awards.length > 0 ? (awards.map((award) => (
                    <Card
                      key={award.id}
                      className="border border-border/50 bg-card hover:border-primary/30 transition-colors"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div className="flex items-start gap-3">
                            <div className="bg-primary/10 text-primary p-2 rounded-md mt-1">
                              <Trophy className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-primary">{award.name}</h3>
                              <p className="text-sm text-muted-foreground mb-3">Awarded by {award.issuer}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2 md:mt-0">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{award.date}</span>
                          </div>
                        </div>
                        <p>{award.description}</p>
                      </CardContent>
                    </Card>
                  ))):(
                      <Alert className="mb-6 border-amber-500/30 bg-amber-500/10">
                        <Construction className="h-5 w-5 text-amber-500" />
                        <AlertTitle className="text-amber-500">Under Development</AlertTitle>
                        <AlertDescription>
                          This section is currently being updated with more award details. Check back soon for a complete list of awards and recognitions.
                        </AlertDescription>
                      </Alert>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
