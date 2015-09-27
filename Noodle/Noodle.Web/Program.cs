using System;
using Nancy.Hosting.Self;

namespace Noodle.Web
{
    class Program
    {
        static void Main(string[] args)
        {
            var uri = new Uri("http://localhost:8890");
            Console.WriteLine("Authentication is running!");
            using (var host = new NancyHost(uri))
            {
                host.Start();

                Console.WriteLine("Your application is running on " + uri);
                Console.WriteLine("Press any [Enter] to close the host.");
                Console.ReadLine();
            }
        }
    }
}
