'use client';

import {
  BarChart3,
  BedDouble,
  Building2,
  FileText,
  Hotel,
  LayoutDashboard,
  Map,
  Package,
  Search,
  Users,
  UserRoundCog,
  Gem,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

import { Input } from '@/shared/ui/input';
import {
  Sidebar as SidebarRoot,
  SidebarContent,
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
    label: 'Общее',
    items: [{ title: 'Панель управления', href: '/admin', icon: LayoutDashboard }],
  },
  {
    label: 'Управления',
    items: [
      { title: 'Отели', href: '/admin/hotel', icon: Hotel },
      { title: 'Категории номеров', href: '/admin/room-categories', icon: BedDouble },
      { title: 'Размещение', href: '/admin/occupancies', icon: UserRoundCog },
      { title: 'Тарифные планы', href: '/admin/rate-plans', icon: FileText },
      { title: 'Пакеты', href: '/admin/packages', icon: Package },
      { title: 'Агентства', href: '/admin/agency', icon: Users },
      { title: 'Рынки', href: '/admin/market', icon: Map },
      { title: 'Страны', href: '/admin/country', icon: Map },
    ],
  },
  {
    label: 'Партнёры',
    items: [
      { title: 'Туроператоры', href: '/admin/operator', icon: Building2 },
    ],
  },
  {
    label: 'Информация',
    items: [
      { title: 'Удобства', href: '/admin/amenity', icon: Info },
      { title: 'Запросы', href: '/admin/request', icon: Gem },
    ],
  },
  {
    label: 'Аналитика',
    items: [{ title: 'Продажи', href: '/admin/analytics/sales', icon: BarChart3 }],
  },
];


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
      <SidebarHeader className="gap-3 border-b pb-3">

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

      <SidebarContent className="px-2 py-1">
        {filteredGroups.map((group, idx) => (
          <div key={group.label}>
            <SidebarGroup className="py-1">
              <SidebarGroupLabel
                className="px-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
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

    </SidebarRoot>
  );
}