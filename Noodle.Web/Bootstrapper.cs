using System.IO;
using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
using Nancy.Diagnostics;
using Nancy.Hosting.Self;
using Nancy.TinyIoc;

namespace Noodle.Web
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override IRootPathProvider RootPathProvider {
            get { return new ServiceRootPathProvider(); }
        }
        /// <summary>
        /// Configure password for Nancy Dashboard
        /// </summary>
        /// <see cref="http://localhost:8890/_Nancy/"/>
        protected override DiagnosticsConfiguration DiagnosticsConfiguration
        {
            get {return new DiagnosticsConfiguration{Password = "1"}; }
        }

        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            StaticConfiguration.EnableRequestTracing = true;
        }

        protected override void ConfigureConventions(NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("App"));
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("Content"));
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("fonts"));
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("node_modules"));
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("Scripts"));
        }
    }
    public class ServiceRootPathProvider : IRootPathProvider
    {
        private readonly IRootPathProvider _provider = new FileSystemRootPathProvider();
        public string GetRootPath()
        {
            return Path.GetFullPath(Path.Combine(_provider.GetRootPath(), "..", ".."));
        }
    }
}
