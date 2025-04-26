using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using desktop.models;
using Newtonsoft.Json;

namespace desktop
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        // IMPORTANT: HAS TO MATCH WITH WEBSITE ADDRESS
        private static string API_ADDRESS = "http://localhost:8000/api/storiess";

        public MainWindow()
        {
            InitializeComponent();

            connectionErrorContainer.Visibility = Visibility.Collapsed;

            LoadInkliStories();
        }

        private async void LoadInkliStories()
        {
            string apiResponse = await ReadInkliAPI();

            if (apiResponse == null)
            {
                connectionErrorContainer.Visibility = Visibility.Visible;
                return;
            }

            List<Story> stories = JsonConvert.DeserializeObject<List<Story>>(apiResponse);
        }

        private async Task<string> ReadInkliAPI()
        {
            HttpClient client = new HttpClient();

            try
            {
                using HttpResponseMessage response = await client.GetAsync(API_ADDRESS);
                response.EnsureSuccessStatusCode();

                return await response.Content.ReadAsStringAsync();
            }
            catch (Exception ex)
            {
                return null;
            }            
        }
    }
}
