import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} src={props.src || ''} alt={props.alt || ''} />;
  },
}));

describe('Footer Component', () => {
  const usePathname = require('next/navigation').usePathname;

  beforeEach(() => {
    // Reset mocks between tests
    jest.clearAllMocks();
  });

  test('renders homepage footer with enhanced layout', () => {
    // Mock the usePathname hook to return '/' (homepage)
    usePathname.mockReturnValue('/');
    
    render(<Footer />);
    
    // Verify homepage-specific elements
    expect(screen.getByText('The Spirit of Aloha')).toBeInTheDocument();
    expect(screen.getByText('Join Our Ohana')).toBeInTheDocument();
    expect(screen.getByText('Stay Updated')).toBeInTheDocument();
    
    // Verify newsletter form exists
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument();
    
    // Verify social links
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(3); // Should have at least 3 social links
    
    // Verify copyright text
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${currentYear} Oahu Surf Co. All rights reserved.`))).toBeInTheDocument();
  });

  test('renders inner page footer with standard layout', () => {
    // Mock the usePathname hook to return '/shop' (inner page)
    usePathname.mockReturnValue('/shop');
    
    render(<Footer />);
    
    // Verify inner page specific elements
    expect(screen.getByText('Oahu Surf Co')).toBeInTheDocument();
    expect(screen.getByText('Your premier destination for surf gear and accessories in Oahu.')).toBeInTheDocument();
    
    // Verify standard navigation sections
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
    
    // Verify expected navigation links
    expect(screen.getByText('All Products')).toBeInTheDocument();
    expect(screen.getByText('Surfboards')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    
    // Verify footer doesn't have homepage-specific elements
    expect(screen.queryByText('The Spirit of Aloha')).not.toBeInTheDocument();
    expect(screen.queryByText('Join Our Ohana')).not.toBeInTheDocument();
  });
}); 