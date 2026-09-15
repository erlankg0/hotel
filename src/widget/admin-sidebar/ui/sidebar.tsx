'use client';

import {
  BarChart3,
  BedDouble,
  Building2,
  CalendarDays,
  ChevronsUpDown,
  ClipboardList,
  FileText,
  Hotel,
  LayoutDashboard,
  LogOut,
  Map,
  Package,
  Search,
  Settings,
  User,
  Users,
  UserRoundCog,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Input } from '@/shared/ui/input';
import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/shared/ui/sidebar';

const groups = [
  {
    label: 'General',
    items: [{ title: 'Dashboard', href: '/admin', icon: LayoutDashboard }],
  },
  {
    label: 'Operations',
    items: [
      { title: 'Contracts', href: '/contracts', icon: FileText },
      { title: 'Calendar', href: '/calendar', icon: CalendarDays },
      { title: 'Reservations', href: '/reservations', icon: ClipboardList },
    ],
  },
  {
    label: 'Inventory',
    items: [
      { title: 'Hotels', href: '/hotels', icon: Hotel },
      { title: 'Room Categories', href: '/room-categories', icon: BedDouble },
    ],
  },
  {
    label: 'Partners',
    items: [
      { title: 'Operators', href: '/operators', icon: Building2 },
      { title: 'Agencies', href: '/agencies', icon: Users },
      { title: 'Markets', href: '/markets', icon: Map },
    ],
  },
  {
    label: 'Configuration',
    items: [
      { title: 'Occupancy', href: '/occupancies', icon: UserRoundCog },
      { title: 'Rate Plans', href: '/rate-plans', icon: FileText },
      { title: 'Packages', href: '/packages', icon: Package },
    ],
  },
  {
    label: 'Analytics',
    items: [{ title: 'Sales', href: '/analytics/sales', icon: BarChart3 }],
  },
];

// Заменить на реального пользователя (сессия/контекст)
const currentUser = {
  name: 'Aigerim Bekova',
  email: 'aigerim@utopia-pms.com',
  avatarUrl: '',
};

export function AdminSidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState('');

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;

    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.title.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <SidebarRoot collapsible="icon">
      {/* Logo */}
      <SidebarHeader className="gap-3 border-b pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg" tooltip="Utopia PMS">
              <Link href="/">
                <div className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background">
                  <Hotel size={17} />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="font-semibold tracking-tight">
                    UTOPIA PMS
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Hotel Management
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Search — скрывается в icon-режиме */}
        <div className="relative px-1 group-data-[collapsible=icon]:hidden">
          <Search
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по меню..."
            className="h-8 pl-8 text-sm"
          />
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="px-2 py-1">
        {filteredGroups.map((group, idx) => (
          <div key={group.label}>
            <SidebarGroup className="py-1">
              <SidebarGroupLabel className="px-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
                {group.label}
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu className="gap-0.5">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      item.href === '/'
                        ? pathname === '/'
                        : pathname.startsWith(item.href);

                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          tooltip={item.title}
                          className="transition-colors duration-150 hover:bg-accent/70 data-[active=true]:bg-accent data-[active=true]:font-medium"
                        >
                          <Link href={item.href}>
                            <Icon size={17} />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {idx < filteredGroups.length - 1 && (
              <SidebarSeparator className="my-1" />
            )}
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <p className="px-3 py-4 text-sm text-muted-foreground">
            Ничего не найдено
          </p>
        )}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="gap-1 border-t pt-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/settings">
                <Settings size={17} />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Переключатель пользователя */}
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  tooltip={currentUser.name}
                  className="data-[state=open]:bg-accent"
                >
                

                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-medium">{currentUser.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {currentUser.email}
                    </span>
                  </div>

                  <ChevronsUpDown size={15} className="ml-auto text-muted-foreground" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent side="top" align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User size={15} className="mr-2" />
                    Профиль
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings size={15} className="mr-2" />
                    Настройки
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:text-destructive"
                  onClick={() => {
                    // TODO: подключить реальный logout
                  }}
                >
                  <LogOut size={15} className="mr-2" />
                  Выйти
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarRoot>
  );
}