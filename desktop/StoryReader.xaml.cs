using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using desktop.models;

namespace desktop
{
    /// <summary>
    /// Interaction logic for StoryReader.xaml
    /// </summary>
    public partial class StoryReader : Window
    {
        public StoryReader(Story story)
        {
            InitializeComponent();
            this.DataContext = story;
        }

        private void PlaySound_Click(object sender, RoutedEventArgs e)
        {
            RelaxingSoundPlayer.Play();
        }

        private void PauseSound_Click(object sender, RoutedEventArgs e)
        {
            RelaxingSoundPlayer.Pause();
        }

        private void VolumeSlider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            if (RelaxingSoundPlayer != null)
            {
                RelaxingSoundPlayer.Volume = VolumeSlider.Value;
            }
        }
    }
}
