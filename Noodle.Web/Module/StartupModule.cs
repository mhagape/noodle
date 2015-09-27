using Nancy;

namespace Noodle.Web.Module
{
    public class StartupModule : NancyModule
    {
        public StartupModule()
        {
            Get["/"] = _ => View["index"];
        }
    }
}
